"use client"

import { useEffect, useRef } from "react"

interface VideoBackgroundProps {
  src: string
  fallbackImageSrc?: string
}

export default function VideoBackgroundComponent({ src, fallbackImageSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Attempt to play the video as soon as it's loaded
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play()
        } catch (error) {
          console.error("Error playing video:", error)
        }
      }
    }

    playVideo()
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={fallbackImageSrc}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  )
}

