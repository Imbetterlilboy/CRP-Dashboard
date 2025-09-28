import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.5%",
    icon: Icons.users,
  },
  {
    title: "Active Sessions",
    value: "1,234",
    change: "+8.2%",
    icon: Icons.dashboard,
  },
  {
    title: "System Status",
    value: "Online",
    change: "99.9%",
    icon: Icons.settings,
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-primary">{stat.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
