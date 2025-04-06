"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, Camera, ChevronRight, Sparkles, Zap, Crown, Star, Shield, Cpu } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const tools = [
  {
    title: "Text To Image",
    description: "Transform text into stunning visuals with advanced AI",
    icon: <Camera className="h-6 w-6" />,
    background: "bg-gradient-to-br from-orange-500/20 to-pink-500/20",
    iconColor: "text-orange-500"
  },
  {
    title: "Style Transfer",
    description: "Apply artistic styles to your images instantly",
    icon: <Sparkles className="h-6 w-6" />,
    background: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "AI Enhancement",
    description: "Enhance image quality with neural networks",
    icon: <Cpu className="h-6 w-6" />,
    background: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500"
  },
  {
    title: "Batch Processing",
    description: "Process multiple images with consistent style",
    icon: <Zap className="h-6 w-6" />,
    background: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-500"
  }
];

const plans = [
  {
    name: "Starter",
    description: "Perfect for trying out our AI image generation tools",
    price: "0",
    billing: "Free forever",
    featured: false,
    gradient: "from-gray-500/10 to-gray-600/10",
    buttonVariant: "outline" as const,
    features: [
      {
        text: "10 Image Generations/month",
        tooltip: "High-quality AI-generated images"
      },
      {
        text: "Basic Style Presets",
        tooltip: "Access to fundamental style options"
      },
      {
        text: "720p Resolution",
        tooltip: "Standard quality output"
      }
    ]
  },
  {
    name: "Pro",
    description: "Ideal for creators and professionals seeking more power",
    price: "29",
    billing: "per month",
    featured: true,
    gradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
    buttonVariant: "default" as const,
    features: [
      {
        text: "Unlimited Generations",
        tooltip: "No monthly limits on image generation"
      },
      {
        text: "4K Resolution Output",
        tooltip: "Ultra-high quality images"
      },
      {
        text: "Priority Processing",
        tooltip: "Faster generation times"
      },
      {
        text: "Advanced Style Controls",
        tooltip: "Fine-tune every aspect of generation"
      }
    ]
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large teams and organizations",
    price: "Custom",
    billing: "Contact us for pricing",
    featured: false,
    gradient: "from-indigo-500/10 to-purple-500/10",
    buttonVariant: "outline" as const,
    features: [
      {
        text: "Unlimited Everything",
        tooltip: "No restrictions on usage"
      },
      {
        text: "API Access",
        tooltip: "Integrate with your applications"
      },
      {
        text: "Custom Model Training",
        tooltip: "Train models on your data"
      },
      {
        text: "24/7 Support",
        tooltip: "Dedicated support team"
      }
    ]
  }
];

export default function PricingPage() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Choose Your Creative Journey
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock the power of AI-generated imagery with our flexible plans
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-muted p-1 rounded-lg">
            <button
              onClick={() => setBillingInterval('monthly')}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                billingInterval === 'monthly' ? "bg-background shadow-sm" : "hover:bg-background/50"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingInterval('yearly')}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                billingInterval === 'yearly' ? "bg-background shadow-sm" : "hover:bg-background/50"
              )}
            >
              Yearly
              <Badge variant="secondary" className="ml-2">Save 20%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={cn(
                "relative overflow-hidden border-2",
                plan.featured ? "border-primary shadow-xl scale-105" : "border-border"
              )}
            >
              {/* Background Gradient */}
              <div className={cn(
                "absolute inset-0 opacity-10 bg-gradient-to-br",
                plan.gradient
              )} />

              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-bl">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative p-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  {plan.name}
                  {plan.featured && <Crown className="h-5 w-5 text-yellow-500" />}
                </h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                    <span className="text-muted-foreground mb-1">{plan.billing}</span>
                  </div>
                </div>

                <Button 
                  className="w-full mb-6" 
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  Get Started
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{feature.text}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Advanced AI Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to bring your creative vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <Card 
                key={tool.title} 
                className="group relative overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={cn(
                  "absolute inset-0 opacity-100",
                  tool.background
                )} />
                <div className="relative p-6 space-y-4">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center",
                    "bg-background/50 backdrop-blur-sm"
                  )}>
                    <div className={tool.iconColor}>{tool.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">SECURE PAYMENTS</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our team is here to help you make the most of our AI image generation platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="outline">
              View FAQ
            </Button>
            <Button size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}