import SiteShell from "@/components/layout/SiteShell";
import { metadataForLocale } from "@/libs/metadata";

export const metadata = metadataForLocale("fr");
export default function FrenchLayout({ children }) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
