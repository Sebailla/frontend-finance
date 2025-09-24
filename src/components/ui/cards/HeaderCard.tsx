import clsx from "clsx"

interface HeaderCardProps {
    title?: string
    className?: string;
    disabled?: boolean;
    color?: "yellow" | "rose" | "sky" | "lira" | "green" | "red";
}
export const HeaderCard = ({ title, className, disabled, color }: HeaderCardProps) => {
    return (
        <div className={clsx(
            "relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-clip-border shadow-lg",
            {
                "bg-gradient-to-tr from-pastel-yellow-400 to-pastel-yellow-100 shadow-pastel-yellow-500/40": color === 'yellow',
                "bg-gradient-to-tr from-pastel-rose-400 to-pastel-rose-100 shadow-pastel-rose-500/40": color === "rose",
                "bg-pastel-lira-200 text-gray-900": color === "lira",
                "bg-gradient-to-tr from-green-apple-400 to-green-apple-100 shadow-green-apple-400/40": color === "green",
                "bg-pastel-sky-300 text-gray-900": color === "sky",
                "bg-pastel-red-300 text-gray-900": color === "red",
            }, "hover:text-gray-700",
            className
        )} >
            <h3 className="block font-title text-3xl font-semibold leading-snug tracking-normal text-pastel-yellow-950 antialiased">
                {title || 'Card Title!'}
            </h3>
        </div >
    )
}
