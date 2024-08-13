export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>認証ページのヘッダー</header>
      {children}
      <footer>認証ページのフッター</footer>
    </>
  );
}
