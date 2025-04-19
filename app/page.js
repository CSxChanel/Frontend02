// app/page
"use client"
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-rose-50 dark:bg-slate-800">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-text-shine">
        Home
      </h1>
      <button
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-text-shine"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
      <button
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-text-shine"
        onClick={() => router.push("/member")}
      >
        Member
      </button>
    </main>
  );
}
