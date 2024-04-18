"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk"

import { Alert } from "@/components/alert"
import { Loader } from "@/components/loader"
import { MeetingRoom } from "@/components/meeting-room"
import { MeetingSetup } from "@/components/meeting-setup"
import { useGetCallById } from "@/hooks/use-get-call-by-id"

const Meeting = () => {
  const { id } = useParams()
  const { isLoaded, user } = useUser()
  const { call, isCallLoading } = useGetCallById(id)

  const [isSetupComplete, setIsSetupComplete] = useState(false)

  if (!isLoaded || isCallLoading) return <Loader />

  if (!call)
    return <p className="flex-center text-3xl font-bold text-white h-screen">Call Not Found</p>

  const notAllowed =
    call.type === "invited" && (!user || !call.state.members.find((m) => m.user.id === user.id))

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default Meeting
