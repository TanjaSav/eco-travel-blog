// import type { Metadata } from "next";
// import "./globals.css";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { inter } from "@/fonts";

// export const metadata: Metadata = {
//   title: "EcoTravelBlog",
//   description: "Sustainable travel and eco technology stories.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { inter } from "@/fonts";

export const metadata: Metadata = {
  title: "EcoTravelBlog",
  description: "Sustainable travel and eco technology stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}