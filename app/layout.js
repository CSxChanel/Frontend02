import ThemeProvider from "./providers/ThemeProvider";
import "./styles/globals.css";

export const metadata = {
  title: "SKYNET WiFi Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 dark:text-rose-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
