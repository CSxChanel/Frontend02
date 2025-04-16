export default function GlassPanel({ children, className }) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/10 dark:bg-gray-900/20 border border-gray-200/30 dark:border-gray-800/30 rounded-xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}
