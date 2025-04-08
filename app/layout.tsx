import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { MainNav } from "@/components/main-nav";
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  Wand2,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image AI - AI Image Generation Dashboard",
  description: "Modern AI image generation dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b bg-card/80 backdrop-blur-sm">
              <div className="flex h-16 items-center gap-4 px-4 md:px-6">
                {/* Mobile Menu Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 w-72">
                    {/* ✅ Add hidden title for accessibility */}
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Wand2 className="h-6 w-6" />
                        </div>
                        <h1 className="text-xl font-bold">IMAGE AI</h1>
                      </div>
                      <ScrollArea className="h-[calc(100vh-120px)]">
                        <MainNav />
                      </ScrollArea>
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Logo for Desktop */}
                <div className="hidden lg:flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Wand2 className="h-6 w-6" />
                  </div>
                  <h1 className="text-xl font-bold">IMAGE AI</h1>
                </div>

                {/* Search and Actions */}
                <div className="flex items-center flex-1 gap-4 md:gap-8">
                  <form className="hidden md:flex-1 md:flex max-w-sm">
                    <div className="relative w-full">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search..."
                        className="pl-8 bg-background/50"
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hidden md:flex"
                  >
                    <Bell className="h-5 w-5" />
                  </Button>
                  <ThemeToggle />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="gap-2 px-2 md:px-4">
                        <Avatar className="h-7 w-7 md:h-8 md:w-8">
                          <AvatarImage src="/avatar.jpg" />
                          <AvatarFallback>KK</AvatarFallback>
                        </Avatar>
                        <span className="hidden md:inline-flex">
                          Kasam Kasami
                        </span>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>

            {/* Main Layout */}
            <div className="flex pt-16">
              {/* Desktop Sidebar */}
              <div className="hidden lg:flex flex-col w-72 border-r fixed left-0 top-16 bottom-0 bg-card">
                <ScrollArea className="flex-1">
                  <div className="p-6">
                    <MainNav />
                  </div>
                </ScrollArea>
              </div>

              {/* Main Content */}
              <main className="flex-1 bg-muted/10 min-h-[calc(100vh-4rem)] lg:ml-72">
                <div className="container mx-auto p-6">{children}</div>
              </main>
            </div>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
