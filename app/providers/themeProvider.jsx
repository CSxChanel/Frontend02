"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Gunakan default export jika ingin impor tanpa kurung kurawal
export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
}
