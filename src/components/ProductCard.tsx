import styles from "./productcard.module.css"
import Image from "next/image"

interface ProductCardProps {
    name: string;
    text: string;
}

export default function ProductCard({ name, text }: ProductCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image
                    src={"/img/Influenza.jpg"}
                    alt="Influenza"
                    width={300}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div className={styles.cardtext}>
                <div className={styles.cardtitle}>{name}</div>
                <div className={styles.carddesc}>{text}</div>
            </div>
        </div>
    );
}
