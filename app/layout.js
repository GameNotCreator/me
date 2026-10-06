import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ActiveSectionContextProvider from "@/libs/SectionProvider";
import MotionProvider from "@/components/layout/MotionProvider";
import { site } from "@/libs/seo";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Hedi Fourati" },
  description: site.description,
  authors: [{ name: site.name, url: `${site.url}/` }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: `${site.url}/`,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
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
