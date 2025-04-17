import ThemeProvider from "./providers/themeProvider";
import "./styles/globals.css";

export const metadata = {
  title: "SKYNET WiFi Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
