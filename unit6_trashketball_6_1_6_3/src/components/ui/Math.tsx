import { useEffect, useRef } from 'react';
import katex from 'katex';

interface Props {
  /** Mixed text/math. Inline math is wrapped in `$...$`, display in `$$...$$`. */
  children: string;
  /** Force the entire string to render in display mode (bigger, blocky math). */
  displayMode?: boolean;
  className?: string;
}

const SPLIT_RE = /(\$\$[\s\S]+?\$\$|\$(?:\\.|[^\\$\n])+\$)/g;

/**
 * Render a string mixing prose with KaTeX-formatted math segments.
 * Math segments inherit font size from the parent, so wrapping in
 * `text-5xl` on the parent scales the math too.
 */
export function MathText({ children, displayMode = false, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.replaceChildren();

    const parts = children.split(SPLIT_RE).filter((p) => p !== '');

    for (const part of parts) {
      const isDisplay = part.startsWith('$$') && part.endsWith('$$');
      const isInline =
        !isDisplay && part.startsWith('$') && part.endsWith('$') && part.length > 1;

      if (isDisplay || isInline) {
        const tex = part.slice(isDisplay ? 2 : 1, isDisplay ? -2 : -1);
        const span = document.createElement('span');
        try {
          katex.render(tex, span, {
            displayMode: displayMode || isDisplay,
            throwOnError: false,
            output: 'html',
          });
        } catch {
          span.textContent = tex;
        }
        host.appendChild(span);
      } else {
        host.appendChild(document.createTextNode(part));
      }
    }
  }, [children, displayMode]);

  return <span ref={ref} className={className} />;
}
