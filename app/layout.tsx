import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/example/navbar-menu-demo";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Gulrajani | Cybersecurity Professional",
  description: "Harsh Gulrajani is a DevSecOps Engineer and Cybersecurity expert specializing in digital infrastructure protection, threat management, and secure solution development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarDemo />
          <br />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}