import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ActiveSectionContextProvider from "@/libs/SectionProvider";
import { cn } from "@/libs/utils";
import { ToastContainer, Bounce } from "react-toastify";
import "./globals.css";

export const metadata = {
  title: "Hedi Fourati | Developer, builder & founder",
  description: "The projects and story of Hedi Fourati: client websites, TunisianPass, student tools, iOS apps, and hackathon experiments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("relative flex items-center justify-center")}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
            <Navbar />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
