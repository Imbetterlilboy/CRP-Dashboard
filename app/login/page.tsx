import { LoginForm } from "@/components/login-form"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background grid-pattern flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Logo size={60} className="justify-center mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access your Chicago dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
