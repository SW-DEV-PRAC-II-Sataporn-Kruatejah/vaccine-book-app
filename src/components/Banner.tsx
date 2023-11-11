"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
    const cover = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"]
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data: session } = useSession()

    return (
        <div className="bannercontainer flex justify-center items-center w-screen h-96 relative overflow-hidden" onClick={() => setIndex(index + 1)}>
            <Image src={cover[index % 4]}
                fill={true}
                alt="cover"
                objectFit="cover" />
            <div className="bannertext absolute transform -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl font-semibold">Vaccine Reservation</h1>
            </div>
            {
                session ?
                    <div className="z-30 absolute top-5 right-10 font-semibold text-white text-lg">
                        Hello {session.user?.name}
                    </div> : null
            }
            <button id="hospitals-button"
                className="z-30 m-2 absolute bottom-0 right-5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 transition-all text-sm"
                onClick={(e) => { e.stopPropagation(); router.push("/hospital") }}>
                Select Hospital
            </button>
        </div>
    );
}

