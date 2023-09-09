"use client"
import { useState } from "react";
import Image from "next/image";

export default function Banner() {
    const cover = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"]
    const [index, setIndex] = useState(0)
    return (
        <div className="bannercontainer flex justify-center items-center w-screen h-60 relative overflow-hidden" onClick={() => setIndex(index + 1)}>
            <Image src={cover[index % 4]}
                fill={true}
                alt="cover"
                objectFit="cover" />
            <div className="bannertext absolute transform -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl font-semibold">Vaccine Reservation</h1>
            </div>
        </div>
    );
}

