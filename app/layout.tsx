import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-geist-sans",
});


export const metadata: Metadata = {
  title: "Jop portal | Landing page",
  description: "Job portal landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>

          <ResponsiveNav/>
          {children}

        </Provider>
      </body>
    </html>
  );
}
