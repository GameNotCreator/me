import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ActiveSectionContextProvider from "@/libs/SectionProvider";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

export const metadata = {
  title: "Hedi Fourati | Developer, builder & founder",
  description: "The projects and story of Hedi Fourati: client websites, TunisianPass, student tools, iOS apps, and hackathon experiments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <MotionProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
