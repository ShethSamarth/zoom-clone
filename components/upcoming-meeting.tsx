"use client"

import { useGetCalls } from "@/hooks/use-get-calls"

export const UpcomingMeeting = () => {
  const { upcomingCalls, isLoading } = useGetCalls()

  if (isLoading || !upcomingCalls || upcomingCalls.length <= 0) {
    return (
      <h2 className="glassmorphism w-fit rounded px-4 py-2 text-base font-normal">
        No Upcoming Meetings
      </h2>
    )
  }

  return (
    <h2 className="glassmorphism w-fit rounded px-4 py-2 text-base font-normal">
      Upcoming Meeting at:{" "}
      {upcomingCalls[upcomingCalls.length - 1].state?.startsAt?.toLocaleTimeString(
        navigator.language,
        { hour: "2-digit", minute: "2-digit" }
      )}
    </h2>
  )
}
