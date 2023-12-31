"use client"
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

type RatingAction = {
    type: "add" | "remove";
    name: string;
    rating?: number | null;
};

const ratingReducer = (ratingMap: Map<string, number | null>, action: RatingAction): Map<string, number | null> => {
    switch (action.type) {
        case "add": {
            const updatedMap = new Map(ratingMap);
            if (action.rating !== undefined) {
                updatedMap.set(action.name, action.rating);
            }
            return updatedMap;
        }
        case "remove": {
            const updatedMap = new Map(ratingMap);
            updatedMap.delete(action.name);
            return updatedMap;
        }
        default:
            return ratingMap;
    }
};

export default function CardPanel() {
    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, number | null>());
    const mockHospitalRepo = [
        { id: "001", name: "Chula", image: "/img/chula.jpg" },
        { id: "002", name: "Rajavithi", image: "/img/rajavithi.jpg" },
        { id: "003", name: "Thammasat", image: "/img/thammasat.jpg" },
    ]
    // Helper function to handle rating updates
    const handleRatingChange = (name: string, rating: number | null) => {
        dispatchRating({ type: "add", name, rating });
    };

    // Helper function to remove a hospital from the list
    const handleRemoveHospital = (name: string) => {
        dispatchRating({ type: "remove", name });
    };

    return (
        <div>
            <div className="flex flex-wrap justify-around items-center p-6">
                {
                    mockHospitalRepo.map((hospital) => (
                        <Link href={`/hospital/${hospital.id}`}>
                            <ProductCard
                                name={hospital.name}
                                imgSrc={hospital.image}
                                initialRating={ratingMap.get(hospital.name) || null}
                                onRatingChange={(rating: number | null) => handleRatingChange(hospital.name, rating)}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className="flex justify-center p-4 px-3 py-10 w-full max-w-md mx-auto">
                <div className="w-full max-w-mdpx-3 bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div className="text-gray-700 text-lg font-semibold py-1 px-2">
                        Hospital Ratings
                    </div>
                    <ul className="py-1 text-sm">
                        {Array.from(ratingMap).map(([hospitalName, rating]) => (
                            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                <li
                                    key={hospitalName}
                                    className="flex-grow font-medium px-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveHospital(hospitalName);
                                    }}
                                >
                                    {hospitalName} : {rating !== null ? rating : "0"}
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
}
