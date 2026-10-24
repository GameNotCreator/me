import SiteShell from "@/components/layout/SiteShell";
import { metadataForLocale } from "@/libs/metadata";

export const metadata = metadataForLocale("en");
export default function EnglishLayout({ children }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
