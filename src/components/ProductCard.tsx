import Image from "next/image";

export default function ProductCard({ name, imgSrc }: { name: string, imgSrc: string }) {
    return (
        <div className="card group bg-gray-100 w-80 h-72 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 m-6">

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
        </div>
    );
}
