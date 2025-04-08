"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Image as ImageIcon,
  User,
  CreditCard,
  Settings,
  Sparkles,
  BookMarked,
  History,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

const routes = [
  {
    label: "Overview",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Generate",
    icon: Sparkles,
    href: "/generate",
    color: "text-violet-500",
  },
  {
    label: "My Collection",
    icon: BookMarked,
    color: "text-pink-500",
    href: "/collection",
  },
  {
    label: "History",
    icon: History,
    color: "text-orange-500",
    href: "/history",
  },
  {
    label: "Profile",
    icon: User,
    color: "text-green-500",
    href: "/profile",
  },
  {
    label: "Pricing",
    icon: CreditCard,
    color: "text-blue-500",
    href: "/pricing",
  },
];

const bottomRoutes = [
  {
    label: "Login Component",
    icon: User,
    href: "/login",
  },
  {
    label: "Register Component",
    icon: User,
    href: "/register",
  },
  {
    label: "Help Center",
    icon: HelpCircle,
    href: "/help",
  },
  {
    label: "Community",
    icon: MessageSquare,
    href: "/community",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-1">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-2",
              pathname === route.href && "bg-muted"
            )}
            asChild
          >
            <Link href={route.href}>
              <route.icon className={cn("h-5 w-5", route.color)} />
              {route.label}
            </Link>
          </Button>
        ))}
      </div>

      <div className="mt-auto pt-8 space-y-1">
        {bottomRoutes.map((route) => (
          <Button
            key={route.href}
            variant="ghost"
            className="w-full justify-start gap-2"
            asChild
          >
            <Link href={route.href}>
              <route.icon className="h-5 w-5 text-muted-foreground" />
              {route.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
