"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Camera,
  Video,
  Brain,
  Palette,
  ArrowUpRight,
  X,
  Wand2,
  Sparkles,
  ImageIcon,
  Brush,
  Layers,
  Share2,
  Download,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      title: "Text To Image",
      description: "Transform text into stunning visuals",
      icon: <Wand2 className="h-6 w-6" />,
      background: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
    {
      title: "Image Variations",
      description: "Create multiple versions of an image",
      icon: <Layers className="h-6 w-6" />,
      background: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      title: "Style Transfer",
      description: "Apply artistic styles to photos",
      icon: <Brush className="h-6 w-6" />,
      background: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
    {
      title: "Image Enhancement",
      description: "Improve image quality automatically",
      icon: <Sparkles className="h-6 w-6" />,
      background: "bg-green-500/10",
      iconColor: "text-green-500",
    },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
      title: "Urban Portrait",
      description: "Created with Neon Style",
      likes: 234,
      downloads: 45,
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
      title: "Abstract Art",
      description: "Digital Painting Style",
      likes: 189,
      downloads: 32,
    },
    {
      src: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=800&auto=format&fit=crop&q=60",
      title: "Nature Scene",
      description: "Landscape Style",
      likes: 421,
      downloads: 78,
    },
  ];

  const stats = [
    { label: "Images Generated", value: "1M+" },
    { label: "Active Users", value: "50K+" },
    { label: "Styles Available", value: "100+" },
    { label: "Processing Time", value: "<2s" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Create Amazing Images with AI
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Transform your ideas into stunning visuals using our advanced AI
          technology
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">
            <Wand2 className="h-5 w-5 mr-2" />
            <Link href="/generate">Start Creating</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/collection"> View Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="p-4 text-center">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6 space-y-4">
            <div
              className={`${feature.background} w-12 h-12 rounded-lg flex items-center justify-center`}
            >
              <div className={feature.iconColor}>{feature.icon}</div>
            </div>
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
            <Button className="w-full">
              Try Now
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </Card>
        ))}
      </div>

      {/* Featured Creations */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Creations</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, i) => (
            <Card key={i} className="overflow-hidden group">
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    View
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{image.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {image.description}
                    </p>
                  </div>
                  <Badge variant="secondary">{image.likes} likes</Badge>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogTitle>Image Preview</DialogTitle>
          <div className="relative mt-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected image"
                className="w-full rounded-lg aspect-[4/3] object-cover"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
