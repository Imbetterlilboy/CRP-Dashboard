import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardGrid } from "@/components/dashboard-grid"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <DashboardHeader />
      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your Chicago dashboard</p>
        </div>
        <DashboardStats />
        <DashboardGrid />
      </main>
    </div>
  )
}
