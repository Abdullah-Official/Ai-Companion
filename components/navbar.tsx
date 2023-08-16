"use client";

import { Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-sidebar";
import { useProModalStore } from "@/hooks/use-pro-modal";
import { boolean } from "zod";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface NavbarProps {
  isPro: boolean;
}

export const Navbar = ({isPro}: NavbarProps) => {
  const {onOpen} = useProModalStore()
  return (
    <div className="fixed flex w-full z-50 h-16 justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              `hidden md:block text-xl md:text-3xl font-bold text-primary`,
              font.className
            )}
          >
            companion ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
       {!isPro && (
         <Button onClick={onOpen} variant="premium" size="sm">
         Upgrade
         <Sparkles className="h-4 w-4 text-white fill-white ml-2" />
       </Button>
       )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
