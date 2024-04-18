"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk"

import { Loader } from "@/components/loader"
import { tokenProvider } from "@/actions/stream.actions"

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY

export const StreamClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded } = useUser()

  const [videoClient, setVideoClient] = useState<StreamVideoClient>()

  useEffect(() => {
    if (!isLoaded || !user) return
    if (!API_KEY) throw new Error("Stream API key is missing")

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id,
        name: user?.fullName || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    })

    setVideoClient(client)
  }, [user, isLoaded])

  if (!videoClient) return <Loader />

  return <StreamVideo client={videoClient}>{children}</StreamVideo>
}
