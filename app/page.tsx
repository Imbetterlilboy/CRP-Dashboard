import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size={32} />
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground text-balance">
              The Complete Platform for <span className="text-primary">Chicago</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best
              web experiences with Chicago.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Link href="/login">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "20 days saved",
              subtitle: "on daily builds.",
              company: "CHICAGO",
            },
            {
              title: "98% faster",
              subtitle: "time to market.",
              company: "PLATFORM",
            },
            {
              title: "300% increase",
              subtitle: "in productivity.",
              company: "DASHBOARD",
            },
            {
              title: "6x faster",
              subtitle: "to build + deploy.",
              company: "SYSTEM",
            },
          ].map((stat, index) => (
            <Card key={index} className="border-border/50 bg-card/30 backdrop-blur-sm text-center">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.subtitle}</p>
                  <div className="text-sm font-medium text-primary">{stat.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Make teamwork seamless.</CardTitle>
              <CardDescription className="text-lg">
                Tools for your team and stakeholders to share feedback and iterate faster.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login">
                <Button size="lg" className="px-8">
                  Start Building Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
