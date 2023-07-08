import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = {
  variant?: "secondary" | "outline";
} & ComponentPropsWithoutRef<"button">

export const Button = ({ className,variant = 'secondary', ...props }:ButtonProps ) => {

  return (
    <button className={cn(
      className,
      variant === "secondary" ? "bg-brand-secondary font-medium text-white" : "bg-transparent border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white font-semibold",
      "appearance-none rounded-lg w-full p-2 text-sm shadow transition-all hover:bg-brand-dark"
    )} {...props}>
      {props.children}
    </button>
  );
}