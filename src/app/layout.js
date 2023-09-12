import "../styles/globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Software Academy",
  keywords: "Software, Academy",
  description: "Generated by create Software Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
