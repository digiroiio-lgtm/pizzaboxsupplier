import GeoPageTemplate from "@/components/GeoPageTemplate";
import { statePages } from "@/lib/content";

const page = statePages.find((p) => p.slug === "pizza-box-supplier-illinois");

export const metadata = {
  title: page.metaTitle,
  description: page.metaDesc,
};

export default function IllinoisLocationPage() {
  return <GeoPageTemplate page={page} />;
}
