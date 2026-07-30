type SectionTitleProps = {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
};

export default function SectionTitle({
    title,
    subtitle,
    align = "center",
}: SectionTitleProps) {
    return (
        <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
            <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}