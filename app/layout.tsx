import type { Metadata } from "next";
import { Noto_Sans_Gothic } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/features/auth/UserProvider";
import { ApolloWrapper } from "@/features/auth/ApolloWrapper";
import MenuAppBar from "@/features/shared/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import AnchorTemporaryDrawer from "@/features/shared/AnchorTemporaryDrawer";

const notojp = Noto_Sans_Gothic({
  weight: ["400", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ゼンレスゾーンゼロのエージェント育成計算機サイト",
  description:
    "HoYoverseの人気ソーシャルゲーム、ゼンレスゾーンゼロのエージェント育成計算機サイトです",
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
          <body className={notojp.className}>
            <header>
              <AnchorTemporaryDrawer />
            </header>
            <main>{children}</main>
            <footer>© {new Date().getFullYear()} zzz masayan</footer>
          </body>
        </UserProvider>
      </ApolloWrapper>
    </html>
  );
}
