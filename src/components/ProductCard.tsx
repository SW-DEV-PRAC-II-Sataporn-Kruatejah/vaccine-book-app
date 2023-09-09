"user client"
import { useState, useEffect } from "react";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function ProductCard({
    name,
    imgSrc,
    initialRating,
    onRatingChange,
}: {
    name: string;
    imgSrc: string;
    initialRating: number | null;
    onRatingChange: (rating: number | null) => void;
}) {
    const [rating, setRating] = useState<number | null>(initialRating);

    useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);

    const handleRatingChange = (newValue: number | null) => {
        setRating(newValue);
        onRatingChange(newValue);
    };

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
            <div className="h-1/5 flex flex-row justify-between p-4">
                <div className="cardtext font-semibold text-base text-gray-800">
                    {name}
                </div>
                <div className="rating-container">
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => handleRatingChange(newValue)}
                    />
                </div>
            </div>
        </InteractiveCard>
    );
}

