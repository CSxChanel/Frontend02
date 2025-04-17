// src/app/layout.jsx

import { Orbitron, Rajdhani } from "next/font/google";
import { ThemeProvider } from "./providers/ThemeProvider";
import "./styles/globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "My App",
  description: "Awesome stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
