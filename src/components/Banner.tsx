import Image from "next/image";

export default function Banner() {
    return (
        <div className="bannercontainer flex justify-center items-center w-screen h-60 relative overflow-hidden">
            <Image src={"/img/cover.jpg"}
                fill={true}
                alt="cover"
                objectFit="cover" />
            <div className="bannertext absolute top-1/2 left-1/4 transform -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl font-semibold">Vaccine Reservation</h1>
            </div>
        </div>
    );
}