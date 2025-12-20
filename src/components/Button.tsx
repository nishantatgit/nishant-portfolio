import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  href = "#",
  variant = "primary",
  external = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "px-5 py-2 rounded-full font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent";

  const variantClasses = {
    primary: "bg-accent text-accent-foreground shadow hover:bg-accent/90 hover:shadow-accent/40",
    secondary: "border border-accent text-accent hover:bg-accent/10"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

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
