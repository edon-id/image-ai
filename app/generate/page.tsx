"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  ImageIcon,
  Camera,
  Copy,
  RefreshCw,
  Settings,
  ChevronRight,
  Upload,
  Sparkles,
  Sun,
  Palette,
  Lightbulb,
  Image,
  ChevronDown,
  X,
  Search,
  CopyIcon,
  SlidersHorizontal,
  Wand2,
  Eraser,
  Layers,
  Cpu,
  Zap,
  History,
  BookMarked,
  Download,
  Share2,
} from "lucide-react";

const presetPrompts = [
  {
    title: "Portrait",
    prompt:
      "A professional portrait photo with natural lighting and shallow depth of field",
    icon: <Camera className="h-4 w-4" />,
  },
  {
    title: "Landscape",
    prompt: "A breathtaking mountain landscape at sunset with dramatic clouds",
    icon: <Sun className="h-4 w-4" />,
  },
  {
    title: "Abstract",
    prompt: "Colorful abstract art with flowing shapes and vibrant gradients",
    icon: <Palette className="h-4 w-4" />,
  },
];

const quickActions = [
  {
    title: "Enhance",
    description: "Improve image quality",
    icon: <Sparkles className="h-5 w-5" />,
    color: "text-purple-500",
  },
  {
    title: "Upscale",
    description: "Increase resolution",
    icon: <Zap className="h-5 w-5" />,
    color: "text-blue-500",
  },
  {
    title: "Remove BG",
    description: "Remove background",
    icon: <Eraser className="h-5 w-5" />,
    color: "text-green-500",
  },
  {
    title: "Variations",
    description: "Generate variations",
    icon: <Layers className="h-5 w-5" />,
    color: "text-orange-500",
  },
];

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [model, setModel] = useState("Ultra Realism");
  const [dragActive, setDragActive] = useState(false);
  const [enhancePrompt, setEnhancePrompt] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("Natural");
  const [lighting, setLighting] = useState("Natural");
  const [cameraSettings, setCameraSettings] = useState("Auto");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const styles = [
    "Natural",
    "Cinematic",
    "Anime",
    "Digital Art",
    "Oil Painting",
  ];
  const lightingOptions = ["Natural", "Studio", "Dramatic", "Soft", "High Key"];
  const cameraSettingsOptions = [
    "Auto",
    "Portrait",
    "Landscape",
    "Macro",
    "Night",
  ];

  const handleGenerate = async () => {
    if (!prompt) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const newImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
      ];

      setImages(newImages);
      setHistory([prompt, ...history]);
      toast.success("Images generated successfully!");
    } catch (error) {
      toast.error("Failed to generate images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      toast.success(`Uploaded ${files.length} image(s)`);
    }
  };

  const SettingSection = ({
    title,
    icon: Icon,
    value,
    options,
    onChange,
  }: any) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <Button
        variant="outline"
        className="w-full justify-between"
        onClick={() => {
          const currentIndex = options.indexOf(value);
          const nextValue = options[(currentIndex + 1) % options.length];
          onChange(nextValue);
          toast.info(`${title} set to ${nextValue}`);
        }}
      >
        <span>{value}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="px-4 lg:px-6 py-6">
        <div className="flex h-screen overflow-hidden">
          {/* Main Content Scrollable Area */}
          <div className="flex-1 w-full overflow-y-auto p-6 space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <Card
                  key={action.title}
                  className="p-4 hover:bg-accent transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`${action.color}`}>{action.icon}</div>
                    <div>
                      <h3 className="font-medium text-sm">{action.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Prompt Input */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
              <div className="relative p-4">
                <Textarea
                  placeholder="Describe the image you want to create..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] border-0 focus-visible:ring-0 resize-none bg-transparent"
                />
                <div className="flex items-center justify-between mt-2 pt-2 border-t">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={handleCopy}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setPrompt("")}
                    >
                      <Eraser className="h-4 w-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                  <Button
                    className="px-8"
                    disabled={!prompt || loading}
                    onClick={handleGenerate}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="h-4 w-4 mr-2" />
                        Generate
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Preset Prompts */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {presetPrompts.map((preset) => (
                <Button
                  key={preset.title}
                  variant="outline"
                  className="flex items-center gap-2 whitespace-nowrap"
                  onClick={() => setPrompt(preset.prompt)}
                >
                  {preset.icon}
                  {preset.title}
                </Button>
              ))}
            </div>

            {/* Generated Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {loading ? (
                Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Card
                      key={i}
                      className="aspect-square flex items-center justify-center bg-accent/50"
                    >
                      <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                    </Card>
                  ))
              ) : images.length > 0 ? (
                images.map((src, i) => (
                  <Card
                    key={i}
                    className="aspect-square overflow-hidden group relative cursor-pointer hover:ring-2 ring-primary/50 transition-all"
                    onClick={() => setSelectedImage(src)}
                  >
                    <img
                      src={src}
                      alt={`Generated ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary">
                            Download
                          </Button>
                          <Button size="sm" variant="secondary">
                            Variations
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-full">
                  <Card className="p-8 text-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <ImageIcon className="h-12 w-12 mb-2" />
                      <h3 className="font-medium text-foreground">
                        No Images Generated
                      </h3>
                      <p className="max-w-sm">
                        Enter a prompt above and click generate to create
                        AI-powered images
                      </p>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </div>

          {/* Fixed Sidebar */}
          <div className="hidden lg:block w-[300px] sticky top-0 h-screen overflow-y-auto p-6 space-y-6 bg-background">
            {/* Settings Panel */}
            <Card className="p-4 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Settings</h2>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <SettingSection
                  title="Style"
                  icon={Palette}
                  value={selectedStyle}
                  options={styles}
                  onChange={setSelectedStyle}
                />
                <SettingSection
                  title="Lighting"
                  icon={Lightbulb}
                  value={lighting}
                  options={lightingOptions}
                  onChange={setLighting}
                />
                <SettingSection
                  title="Camera"
                  icon={Camera}
                  value={cameraSettings}
                  options={cameraSettingsOptions}
                  onChange={setCameraSettings}
                />
              </div>

              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">AI Enhancement</span>
                  </div>
                  <Switch
                    checked={enhancePrompt}
                    onCheckedChange={setEnhancePrompt}
                  />
                </div>
              </div>
            </Card>

            {/* History */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Recent Prompts
                </h2>
                <Button variant="ghost" size="sm">
                  Clear
                </Button>
              </div>
              <div className="space-y-2">
                {history.map((item, i) => (
                  <div
                    key={i}
                    className="text-sm p-2 rounded-md hover:bg-accent cursor-pointer flex items-center justify-between group"
                    onClick={() => setPrompt(item)}
                  >
                    <span className="line-clamp-1">{item}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHistory(history.filter((_, index) => index !== i));
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {history.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-2">
                    No recent prompts
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Details Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-6xl p-0 gap-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Image Details</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="flex-1 relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              {selectedImage && (
                <div className="relative aspect-square md:aspect-auto md:h-[600px]">
                  <img
                    src={selectedImage}
                    alt="Selected image"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="w-full md:w-[300px] shrink-0 border-t md:border-l md:border-t-0 p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Prompt</h3>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">{prompt}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={handleCopy}
                >
                  <CopyIcon className="h-4 w-4 mr-2" />
                  Copy prompt
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Settings</h3>
                <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Style</span>
                    <Badge variant="secondary">{selectedStyle}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Lighting</span>
                    <Badge variant="secondary">{lighting}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Camera</span>
                    <Badge variant="secondary">{cameraSettings}</Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
