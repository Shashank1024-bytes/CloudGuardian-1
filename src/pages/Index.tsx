import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Zap, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security monitoring and threat detection",
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 surveillance of your cloud infrastructure",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Immediate notifications for security events and anomalies",
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Meet industry standards with automated compliance reporting",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-elegant">
                <Shield className="w-6 h-6 text-primary-foreground fill-current" aria-label="CloudGuardian logo" />
              </div>
              <span className="text-xl font-bold">CloudGuardian</span>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-primary shadow-elegant">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 shadow-sm">
              <CheckCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              Trusted by 10,000+ businesses worldwide
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Secure Your{" "}
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Cloud. Empower Your Future.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              CloudGuardian helps you safeguard critical infrastructure with real-time monitoring, 
              instant alerts, and enterprise-grade compliance — so you can focus on innovation, 
              not security risks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-primary shadow-elegant hover:shadow-lg transition-all duration-200 h-14 px-8 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-primary/20"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Enterprise Security Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection for your cloud infrastructure with
              cutting-edge security tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(features) &&
              features.map((feature, index) => (
                <Card
                  key={index}
                  className="shadow-subtle border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                      {/* Force icon to always be visible & filled */}
                      <feature.icon className="w-6 h-6 text-primary-foreground fill-current" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies already protecting their cloud
            environments with CloudGuardian
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-gradient-primary shadow-elegant hover:shadow-lg transition-all duration-200 h-14 px-8 text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/signin">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg border-primary/20"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Shield
                  className="w-5 h-5 text-primary-foreground fill-current"
                  aria-hidden="true"
                />
              </div>
              <span className="font-bold">CloudGuardian</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CloudGuardian. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
