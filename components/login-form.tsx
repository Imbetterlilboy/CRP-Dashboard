"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDiscordLogin = async () => {
    setIsLoading(true)

    // Simulate Discord OAuth flow
    setTimeout(() => {
      // Set auth cookie (in a real app, this would be handled by your auth provider)
      document.cookie = "auth-token=discord-user-token; path=/; max-age=86400"

      // Redirect to dashboard after successful login
      window.location.href = "/dashboard"
    }, 2000)
  }

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>Connect with Discord to access your dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={handleDiscordLogin}
          disabled={isLoading}
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-3 h-auto"
        >
          {isLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <Icons.discord className="mr-2 h-5 w-5" />
              Continue with Discord
            </>
          )}
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          <p>By signing in, you agree to our terms of service</p>
        </div>
      </CardContent>
    </Card>
  )
}
