import "./globals.css";
import Header from "./header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBottom from "./footer/footer";
import GoTopButton from "./component/gotop";
import CountProvider from "./context/countProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: "Bir Billing Tandem Pilots List 🪂",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CountProvider>
          <Header />
          {children}
        </CountProvider>
        <FooterBottom />
        <ToastContainer limit={1} />
        <GoTopButton />
      </body>
    </html>
  );
}
