import ProductCard from "./ProductCard"
import Link from "next/link";

export default async function HospitalCatalog({ hospitalJson }: { hospitalJson: Object }) {

    const hospitalJsonReady = await hospitalJson

    return (
        <div className="flex flex-wrap justify-around items-center p-6">
            {
                hospitalJsonReady.data.map((hospital:Object) => (
                    <Link href={`/hospital/${hospital.id}`}>
                        <ProductCard
                            name={hospital.name}
                            imgSrc={hospital.picture}
                        />
                    </Link>
                ))
            }
        </div>
    )
}