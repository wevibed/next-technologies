import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-electric-blue text-white hover:bg-blue-highlight px-6 py-3 text-sm tracking-wide",
  secondary:
    "hairline text-current hover:border-[color:var(--border-strong)] px-6 py-3 text-sm tracking-wide bg-transparent",
  whatsapp:
    "bg-[#1F2A33] text-brand-white hover:bg-[#2A3A47] px-6 py-3 text-sm tracking-wide border border-[color:var(--border-strong)]",
  ghost: "text-electric-blue hover:text-blue-highlight px-0 py-1 text-sm font-medium",
  dark: "bg-obsidian text-brand-white hover:bg-graphite px-6 py-3 text-sm tracking-wide",
};

const sizes = {};

export default function Button({
  as = "button",
  to,
  href,
  variant = "primary",
  size,
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  const Comp = as;
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}