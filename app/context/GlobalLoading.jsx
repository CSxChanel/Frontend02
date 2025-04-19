"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Atom } from "react-loading-indicators";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 dark:bg-black/60 backdrop-blur-sm">
      <Atom color="#462cf8" size="large" text="SKYNET" textColor="#1a59ef" />
    </div>
  );
}
