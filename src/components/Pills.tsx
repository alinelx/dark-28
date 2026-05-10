import Link from "next/link";

type PillProps = {
  size: string;
  bgColor: string;
  bgColorHover: string;
  textColor: string;
  textColorHover: string;
  border?: string;
  px: number;
  py: number;
  gap?: string;
};

type PillType = {
    label: string;
    href?: string;
    style: string;
}

export function HandlePillProps ({
    size, 
    bgColor,
    bgColorHover,
    textColor,
    textColorHover,
    border,
    px,
    py,
    gap
}: PillProps
) {
    return (`rounded-full ${gap} px-${px} py-${py} uppercase  font-black shadow-text ${border} shadow-md/50 text-${size} bg-${bgColor} text-${textColor} ${border} hover:bg-${bgColorHover} hover:text-${textColorHover} transition-all duration-200 ease-in-out hover:scale-110`)
} 

function PillRender(style: string) {
    if (style === 'primary') {
    return (HandlePillProps({
        size: "xl",
        bgColor: "(--color-text)",
        textColor: "(--color-surface)",
        bgColorHover: "(--color-yellow)",
        textColorHover: "black",
        border: "ring-1",
        px: 6,
        py: 3,
        gap: "mb-3"
    }))
    }
    if (style === 'secondary') {
    return (HandlePillProps({
        size: "md",
        bgColor: "(--color-yellow)",
        textColor: "(--color-black)",
        bgColorHover: "(--color-black)",
        textColorHover: "(--color-white)",
        border: "ring-1",
        px: 6,
        py: 3,
        gap: "mb-3"
    }));
    } else {
    return (HandlePillProps({
        size: "xs",
        bgColor: "(--color-bg)",
        textColor: "(--color-text)",
        bgColorHover: "(--color-text)",
        textColorHover: "(--color-bg)",
        border: "",
        px: 5,
        py: 3,
        gap: "gap-4"
    }));
    }
}

export default function Pill ({
    label,
    href,
    style
    }: PillType){
    const className = PillRender(style);
    if (href) {
        return (
        <Link href={href}
        className={className}>
            {label}
        </Link>
        );
    }
    return (<span className={className}>{label}</span>);
}