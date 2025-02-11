import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "Golf Comps",
  description: "Created by Calum Bradley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ProductProvider>{children}</ProductProvider>
        <Footer />
      </body>
    </html>
  );
}