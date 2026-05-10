import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  style: "primary" | "secondary" | "round" | "directions" | "filters" | "status" | "default";
  className?: string;
  ariaLabel?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  type?: "button" | "submit" | "reset";
};

function buttonClasses(style: ButtonProps["style"]) {
  switch (style) {
    case "primary":
      return "rounded-full mx-auto py-3 uppercase font-black shadow-text ring-1 shadow-md/50 text-xl bg-(--color-text) text-(--color-surface) hover:bg-(--color-yellow) hover:text-black transition-all duration-200 ease-in-out hover:scale-110";

    case "secondary":
      return "rounded-full mb-3 px-5 py-2 uppercase font-black shadow-text ring-1 shadow-md/50 text-md bg-(--color-yellow) text-black hover:bg-black hover:text-(--color-white) transition-all duration-200 ease-in-out hover:scale-110";

    case "round":
      return "flex h-12 aspect-square items-center justify-center rounded-full bg-black text-lg font-extrabold text-white transition-all duration-100 ease-in-out hover:scale-110";

    case "directions":
      return "rounded-full gap-4 py-1 px-3 w-fit justify-center uppercase font-black shadow-text shadow-md/50 text-sm bg-(--color-bg) text-(--color-text) hover:bg-(--color-text) hover:text-(--color-bg) transition-all duration-200 ease-in-out hover:scale-110";
      
    case "filters":
      return "rounded-full gap-4 py-1 px-3 w-fit uppercase justify-center font-black shadow-text ring-1 shadow-md/50 text-xs bg-(--color-surface) text-(--color-text) hover:bg-(--color-text) hover:text-(--color-surface) hover:scale-110 transition-all duration-200 ease-in-out"
    
    case "status":
      return "rounded-full px-2 py-1 m-auto uppercase font-bold shadow-text shadow-md/50 text-xs bg-(--color-bg) text-(--color-text) hover:bg-(--color-text) hover:text-(--color-bg) transition-all duration-200 ease-in-out hover:scale-110";

    default:
      return "rounded-full gap-4 py-1 px-3 uppercase justify-center font-black shadow-text shadow-md/50 text-xs bg-(--color-bg) text-(--color-text) hover:bg-(--color-text) hover:text-(--color-bg) transition-all duration-200 ease-in-out hover:scale-110";
  }
}

export default function Button({
  children,
  onClick,
  style,
  className = "",
  ariaLabel,
  ariaControls,
  ariaExpanded,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={`${buttonClasses(style)} ${className}`}
    >
      {children}
    </button>
  );
}