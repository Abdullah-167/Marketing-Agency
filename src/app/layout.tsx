import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/Components/Common/Footer";
import { Navbar } from "@/Components/Common/Navbar";
import { usePathname } from "next/navigation";
import HomeOutro from "@/Components/Common/HomeOutro";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favi.png", sizes: "48x48", type: "image/png" }],
    shortcut: "/favi.png",
    apple: "/favi.png",
    other: {
      rel: "icon",
      url: "/favi.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-black relative overflow-x-hidden">
        {pathname === "/" && <HomeOutro />}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
