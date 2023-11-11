"use client"
import { VideoPlayer } from "./VideoPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export function PromoteCard() {
    const [playing, setPlaying] = useState(true)
    useWindowListener("contextmenu", (e) => { e.preventDefault() })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4"></VideoPlayer>
            <div className="m-5 flex flex-col w-full items-center justify-center">
                Get your vaccine today.
                <button id="video-button"
                    className="w-20 block rounded-md bg-blue-600 hover:bg-blue-800 px-3 py-2 text-white shadow-sm"
                    onClick={() => setPlaying(!playing)}>
                    {playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    )
}