import "./globals.css";
import Header from "./header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBottom from "./footer/footer";

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
        <FooterBottom />
      </body>
    </html>
  );
}
