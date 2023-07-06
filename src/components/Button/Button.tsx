import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export const Button = ({ className, ...props }: ComponentPropsWithoutRef<"button">) => {

  return (
    <button className={cn(
      className,
      "appearance-none rounded-lg bg-brand-secondary w-full max-w-xl p-2 text-sm font-medium text-white shadow transition-all hover:bg-brand-dark"
    )} {...props}>
      {props.children}
    </button>
  );
}