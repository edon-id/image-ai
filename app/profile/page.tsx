"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Camera,
  Settings,
  Edit2,
  Save,
  Bell,
  Lock,
  CreditCard,
  Download,
  Share2,
  Trash2,
  Image as ImageIcon,
  Heart,
  Eye,
  Clock,
  Shield,
  Mail,
  Globe,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  const recentImages = [
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
      title: "Sunset Dream",
      likes: 24,
      views: 156,
    },
    {
      src: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=400",
      title: "Mountain Vista",
      likes: 18,
      views: 92,
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      title: "Urban Life",
      likes: 45,
      views: 230,
    },
  ];

  const achievements = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Creative Pioneer",
      description: "Generated 100+ unique images",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Style Master",
      description: "Used all available style presets",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Power User",
      description: "Created 50 images in one day",
    },
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <div className="flex gap-2">
            {isEditing ? (
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            ) : (
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Card */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                      <Camera className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 rounded-full h-8 w-8"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      Pro User
                    </Badge>
                    <div className="flex gap-2 justify-center">
                      <Badge variant="outline">
                        <ImageIcon className="h-3 w-3 mr-1" />
                        247
                      </Badge>
                      <Badge variant="outline">
                        <Heart className="h-3 w-3 mr-1" />
                        1.2k
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Display Name
                      </label>
                      <Input
                        defaultValue="Kasam Kasami"
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username</label>
                      <Input defaultValue="@kasam" disabled={!isEditing} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        defaultValue="kasam@example.com"
                        type="email"
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        defaultValue="San Francisco, CA"
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea
                      defaultValue="Digital artist and AI enthusiast exploring the boundaries of creativity with artificial intelligence."
                      disabled={!isEditing}
                      className="resize-none"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, i) => (
                  <Card key={i} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Images Created
                    </p>
                    <p className="text-2xl font-bold">247</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Likes</p>
                    <p className="text-2xl font-bold">1,234</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Image Views</p>
                    <p className="text-2xl font-bold">5,678</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Hours Saved</p>
                    <p className="text-2xl font-bold">42</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Images */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Recent Creations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentImages.map((image, i) => (
                  <Card key={i} className="overflow-hidden group">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{image.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Heart className="h-4 w-4" /> {image.likes}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Eye className="h-4 w-4" /> {image.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Notification Settings */}
            <Card className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about your activity
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
              </div>
            </Card>

            {/* Privacy Settings */}
            <Card className="p-6 space-y-6">
              <h2 className="text-xl font-semibold">Privacy</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Public Profile</p>
                      <p className="text-sm text-muted-foreground">
                        Make your profile visible to everyone
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={publicProfile}
                    onCheckedChange={setPublicProfile}
                  />
                </div>
              </div>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 border-destructive/50">
              <h2 className="text-xl font-semibold text-destructive mb-4">
                Danger Zone
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
