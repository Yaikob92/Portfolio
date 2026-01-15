import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress, CustomCursor } from "@/components/ui/ScrollProgress";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
