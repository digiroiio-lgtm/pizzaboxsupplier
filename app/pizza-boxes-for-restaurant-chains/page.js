import BuyerSegmentTemplate from "@/components/BuyerSegmentTemplate";
import { buyerSegmentPages } from "@/lib/content";

const page = buyerSegmentPages.find((p) => p.slug === "pizza-boxes-for-restaurant-chains");

export const metadata = {
  title: page.metaTitle,
  description: page.metaDesc,
};

export default function RestaurantChainsPage() {
  return <BuyerSegmentTemplate page={page} />;
}
