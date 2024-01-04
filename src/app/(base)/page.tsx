import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="primary">
        <Link href="/dnd">DND</Link>
      </Button>
    </div>
  );
}
