import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "bg-accent text-white shadow-sm hover:bg-accent-hover hover:shadow-md",
    secondary: "bg-surface text-foreground border border-border shadow-sm hover:bg-border/50",
    outline: "border-2 border-accent text-accent hover:bg-accent/5",
    ghost: "text-muted hover:text-foreground hover:bg-surface"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2.5 text-base rounded-xl",
    lg: "px-8 py-3.5 text-lg rounded-xl"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Use regular <a> for external links or downloads
  if (external || props.download !== undefined) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses} {...props}>
      {children}
    </Link>
  );
}
