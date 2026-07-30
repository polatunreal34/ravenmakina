type ButtonProps = {
    children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
    return (
        <button
            className="
        rounded-xl
        bg-orange-500
        px-6
        py-3
        font-semibold
        text-white
        transition
        duration-300
        hover:bg-orange-600
        cursor-pointer
      "
        >
            {children}
        </button>
    );
}