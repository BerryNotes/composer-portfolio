type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header";
};

export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const Tag = as as keyof React.JSX.IntrinsicElements;
  const style = delay
    ? ({ ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties)
    : undefined;
  return (
    <Tag style={style} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
