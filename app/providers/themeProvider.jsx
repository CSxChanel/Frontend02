"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: "dark",
      }}
      themeMap={{
        light: "light",
        dark: "dark",
      }}
      // disable the initial theme switch http request
      disableTransitionOnChange={false}
      storageKey="theme"
      cookieName="theme"
      cookieExpires={60 * 60 * 24 * 30}
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}
