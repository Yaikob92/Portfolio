import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yaikob Wasihun | Resume",
  description: "Official resume of Yaikob Wasihun, Software Engineer. View and download as PDF.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
