import "@styles/global.css";

export const metadata = {
  title: "Starter: NextJS with Tailwind in TypeScript",
  description: "NextJS 13 starter template using app directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
