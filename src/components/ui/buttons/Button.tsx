import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    color?: "yellow" | "rose" | "sky" | "lira" | "green" |"red"; 
}

const Button = ({
    name,
    type = "button",
    onClick,
    className,
    disabled,
    color = "yellow"
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                "btn",
                {
                    "bg-pastel-yellow-300 text-gray-900 ring-pastel-yellow-300": color === "yellow",
                    "bg-pastel-rose-200 text-gray-900 ring-pastel-rose-200": color === "rose",
                    "bg-pastel-lira-200 text-gray-900 ring-pastel-lira-200": color === "lira",
                    "bg-green-apple-300 text-gray-900 ring-green-apple-300": color === "green",
                    "bg-pastel-sky-300 text-gray-900 ring-pastel-sky-300": color === "sky",
                    "bg-pastel-red-300 text-gray-900 ring-pastel-red-300": color === "red",
                }, "hover:text-gray-700",
                className
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

export default Button;

