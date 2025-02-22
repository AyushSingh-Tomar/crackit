"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
// import { useUserRole } from "@/hooks/useUserRole";

function DasboardBtn() {
  const isCandidate=false;
  const isInterviewer=true;

  if (isCandidate ) return null;

  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <LayoutDashboard className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}
export default DasboardBtn;
