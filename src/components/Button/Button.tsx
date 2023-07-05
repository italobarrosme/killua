import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

export const Button = ({ className, ...props }: ComponentPropsWithoutRef<"button">) => {
  const _className = clsx(
    className,
    "appearance-none rounded-lg bg-brand-secondary p-2 text-sm font-medium text-white shadow transition-all hover:bg-brand-dark"
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}