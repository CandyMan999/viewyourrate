import "./globals.css";

export const metadata = {
  title: "View Your Rate",
  description: "Mortgage rate exploration built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
