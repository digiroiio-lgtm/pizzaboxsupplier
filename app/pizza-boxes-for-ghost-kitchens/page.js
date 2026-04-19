import BuyerSegmentTemplate from "@/components/BuyerSegmentTemplate";
import { buyerSegmentPages } from "@/lib/content";

const page = buyerSegmentPages.find((p) => p.slug === "pizza-boxes-for-ghost-kitchens");

export const metadata = {
  title: page.metaTitle,
  description: page.metaDesc,
};

export default function GhostKitchensPage() {
  return <BuyerSegmentTemplate page={page} />;
}
