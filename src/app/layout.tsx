import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { inter } from "@/fonts";

// Global metadata for the entire application (used by Next.js for SEO)
export const metadata = {
  title: {
    default: "EcoTravelBlog",          // Default title for all pages
    template: "%s | EcoTravelBlog",    // Title format for individual pages
  },
  description:
    "Discover eco-friendly travel ideas, sustainable destinations, and responsible tourism tips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Root HTML structure for the entire app
    <html lang="en">
      {/* Global font applied to the whole website */}
      <body className={inter.className}>
        
        {/* Global header visible on all pages */}
        <Header />

        {/* Page-specific content injected by Next.js */}
        {children}

        {/* Global footer visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}