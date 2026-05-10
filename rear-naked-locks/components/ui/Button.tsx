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
      "border border-red-500/30 bg-red-600 text-white hover:bg-red-500",

    secondary:
      "border border-white/15 bg-black/20 text-white hover:border-white/40 hover:bg-white/5",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}