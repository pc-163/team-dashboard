import Footer from "./footer/page";
import "./globals.css";
import Header from "./header/header";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Bir Billing Tandem Pilots List 🪂",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
