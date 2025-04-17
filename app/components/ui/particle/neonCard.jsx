export default function NeonCard({ children }) {
  return (
    <div className="relative p-6 rounded-lg bg-white dark:bg-gray-800 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
      <div className="relative z-10 border-2 border-transparent group-hover:border-cyan-400 transition-all duration-300 rounded-lg">
        {children}
      </div>
    </div>
  );
}
