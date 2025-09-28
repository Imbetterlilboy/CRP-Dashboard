import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "User Management",
    description: "Manage users, roles, and permissions across your Chicago platform.",
    status: "Active",
    action: "Manage Users",
  },
  {
    title: "Analytics Dashboard",
    description: "View detailed analytics and insights about your platform usage.",
    status: "Active",
    action: "View Analytics",
  },
  {
    title: "System Monitoring",
    description: "Monitor system health, performance metrics, and uptime status.",
    status: "Online",
    action: "View Metrics",
  },
  {
    title: "Integration Console",
    description: "Configure and manage third-party integrations and API connections.",
    status: "Ready",
    action: "Configure",
  },
  {
    title: "Security Center",
    description: "Review security logs, manage access controls, and audit trails.",
    status: "Secure",
    action: "Review Security",
  },
  {
    title: "Backup & Recovery",
    description: "Manage data backups, recovery points, and disaster recovery plans.",
    status: "Protected",
    action: "Manage Backups",
  },
]

export function DashboardGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Platform Features</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {feature.status}
                </Badge>
              </div>
              <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-transparent" variant="outline">
                {feature.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
