import { StreamClientProvider } from "@/providers/stream-client-provider"

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  )
}

export default RootLayout
