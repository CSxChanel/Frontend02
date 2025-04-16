"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system" // atau "light"/"dark"
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}
