import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "pill" | "underline" | "ghost";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  variant?: Variant;
}

const baseStyles =
  "relative text-sm font-medium transition-all duration-300";

const variantStyles: Record<Variant, string> = {
  default: "text-muted-foreground hover:text-foreground",
  
  underline:
    "text-muted-foreground hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full",

  pill:
    "px-3 py-1.5 rounded-full hover:bg-muted transition",

  ghost:
    "px-2 py-1 hover:bg-muted rounded-md",
};

const activeStyles: Record<Variant, string> = {
  default: "text-primary",

  underline:
    "text-primary after:w-full",

  pill:
    "bg-primary text-primary-foreground shadow",

  ghost:
    "text-primary bg-muted",
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      variant = "default",
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            variantStyles[variant],
            isActive && activeStyles[variant],
            isActive && activeClassName,
            isPending && pendingClassName,
            className
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };