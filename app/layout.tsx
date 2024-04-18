import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "react-datepicker/dist/react-datepicker.css"
import "@stream-io/video-react-sdk/dist/css/styles.css"

import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "Video calling App",
  icons: { icon: "/icons/logo.svg" },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/yoom-logo.svg",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#fff",
        },
      }}
    >
      <html lang="en">
        <body className={cn(inter.className, "bg-dark-2")}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
