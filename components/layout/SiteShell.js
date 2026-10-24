import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ActiveSectionContextProvider from "@/libs/SectionProvider";
import MotionProvider from "@/components/layout/MotionProvider";
import LocaleProvider from "@/libs/LocaleProvider";
import { translate } from "@/libs/i18n";
import "@/app/globals.css";

export default function SiteShell({ children, locale }) {
  return <html lang={locale}>
    <body>
      <a className="skip-link" href="#main-content">{translate("Skip to content", locale)}</a>
      <LocaleProvider locale={locale}>
        <MotionProvider><ActiveSectionContextProvider>
          <Navbar />{children}<Footer />
        </ActiveSectionContextProvider></MotionProvider>
      </LocaleProvider>
    </body>
  </html>;
}
