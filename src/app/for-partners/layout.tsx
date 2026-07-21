import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Monetize Your Space",
  description: "List your café or coworking space on OFFEE and monetize your empty seats. Reach remote workers, freelancers, and professionals with zero upfront cost.",
  keywords: ["list your space", "monetize empty seats", "workspace partner", "coworking host", "cafe owner revenue"],
};

export default function ForPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
