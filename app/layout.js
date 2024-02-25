import "./globals.css";
import Header from "./header/header";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Pilots",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        
      </body>
    </html>
  );
}
