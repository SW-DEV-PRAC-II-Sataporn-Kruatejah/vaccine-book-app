import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({ params }: { params: { hid: string } }) {


    const hospitalData = await getHospital(params.hid);

    if (!hospitalData) {
        return <div>Hospital not found</div>;
    }

    return (
        <div className="flex justify-evenly my-10 mx-96 bg-white rounded-lg shadow-lg p-4">
            <div className="relative w-64 h-44 rounded-lg overflow-hidden shadow-sm">
                <Image
                    src={hospitalData.data.picture}
                    alt={hospitalData.data.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-semibold text-gray-800">
                    {hospitalData.data.name}
                </h1>
                <div>Address: {hospitalData.data.address}</div>
                <div>District: {hospitalData.data.district}</div>
                <div>Province: {hospitalData.data.province}</div>
                <div>Postal code: {hospitalData.data.postalcode}</div>
                <div>Tel: {hospitalData.data.tel}</div>
            </div>
        </div>
    );
}
