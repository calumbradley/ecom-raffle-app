import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { StoreProvider } from "@context/StoreContext";

export const metadata = {
  title: "Golf Comps",
  description: "Created by Calum Bradley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <StoreProvider>{children}</StoreProvider>
        <Footer />
      </body>
    </html>
  );
}
