export default function AnimatedBanner({ title }) {
  return (
    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-text-shine">
      {title}
    </h1>
  );
}
