interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-red-600 hover:bg-red-500 text-white border border-red-500/30",

    secondary:
      "border border-white/15 bg-black/20 text-white hover:border-white/40 hover:bg-white/5",
  };

  return (
    <button
      className={`rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}