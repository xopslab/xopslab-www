"use client";

import {Button} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    {path: "/", label: "Home"},
    {path: "/learn", label: "Learn"},
    {path: "/build", label: "Build"},
    {path: "/grow", label: "Grow"},
    {path: "/community", label: "Community"},
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-3 md:px-6 w-full backdrop-blur-md bg-background/80 border-border/40">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/xops-logo.png"
              alt="XOps Lab"
              width={90}
              height={45}
              className="rounded-md object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mx-4 flex-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink
                    asChild
                    className={cn(navigationMenuTriggerStyle(), pathname === item.path && "bg-muted font-medium")}>
                    <Link href={item.path}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Premium Button */}
        <div className="hidden md:flex">
          <Link href="#">
            <Button className="rounded-full bg-[#365062] hover:bg-[#2a3f4e] hover:shadow-lg transition-all duration-300">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate to different sections</SheetDescription>
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "p-2 hover:bg-muted rounded-md transition-colors",
                      pathname === item.path && "bg-muted font-medium"
                    )}>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6">
                <Link href="#">
                  <Button className="w-full rounded-full bg-[#365062] hover:bg-[#2a3f4e] hover:shadow-lg transition-all duration-300">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
