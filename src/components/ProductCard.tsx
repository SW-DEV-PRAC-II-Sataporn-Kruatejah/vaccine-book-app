import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard({ name, imgSrc }: { name: string, imgSrc: string }) {
    return (
        <InteractiveCard>
            <div className="cardimg w-full h-4/5 relative overflow-hidden rounded-t-lg">
                <Image
                    src={imgSrc}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-110"
                />
            </div>
            <div className="cardtext p-4 font-semibold text-base mb-2 text-gray-800">
                {name}
            </div>
        </InteractiveCard>
    );
}
