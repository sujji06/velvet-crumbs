import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

export default function Button({
    children,
    variant = "primary",
}: ButtonProps) {
    return (
        <button
            className={`rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300

            ${
                variant === "primary"
                    ? "bg-[#2B2B2B] text-white hover:bg-[#A67C52]"
                    : "border border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white"
            }`}
        >
            {children}
        </button>
    );

    
}

export {Button} ;