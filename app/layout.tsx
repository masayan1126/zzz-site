import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/features/auth/UserProvider";
import { ApolloWrapper } from "@/features/auth/ApolloWrapper";
import MenuAppBar from "@/features/shared/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics gaId={GA_ID} />
      </head>
      <ApolloWrapper>
        <UserProvider>
          <body className={inter.className}>
            <header>
              <MenuAppBar />
            </header>
            {children}
            <footer>© {new Date().getFullYear()} zzz masayan</footer>
          </body>
        </UserProvider>
      </ApolloWrapper>
    </html>
  );
}
