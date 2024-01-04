import Button from "@/components/ui/button";
import Link from "next/link";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen max-w-6xl mx-auto">{children}</div>;
};

export default BaseLayout;
