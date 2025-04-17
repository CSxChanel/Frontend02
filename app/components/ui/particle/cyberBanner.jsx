export default function CyberBanner({ title }) {
  return (
    <div className="relative overflow-hidden">
      <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        {title}
      </h1>
      <div className="absolute inset-0 bg-[url('/dummy-user.png')] opacity-20" />
    </div>
  );
}
