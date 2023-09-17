import Image from "next/image";

export default function HospitalDetailPage({ params }: { params: { hid: string } }) {

    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", { name: "Chula", image: "/img/chula.jpg" })
    mockHospitalRepo.set("002", { name: "Rajavithi", image: "/img/rajavithi.jpg" })
    mockHospitalRepo.set("003", { name: "Thammasat", image: "/img/thammasat.jpg" })

    const hospitalData = mockHospitalRepo.get(params.hid);

    if (!hospitalData) {
        return <div>Hospital not found</div>;
    }

    return (
        <div className="flex items-center justify-evenly my-10 mx-96 bg-white rounded-lg shadow-lg p-4">
            <div className="relative w-64 h-44 rounded-lg overflow-hidden shadow-sm">
                <Image
                    src={hospitalData.image}
                    alt={hospitalData.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="mt-4 text-center">
                <h1 className="text-xl font-semibold text-gray-800">
                    {hospitalData.name}
                </h1>
            </div>
        </div>
    );
}
