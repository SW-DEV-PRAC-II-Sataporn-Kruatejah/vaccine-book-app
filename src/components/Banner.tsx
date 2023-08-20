import styles from "./banner.module.css"
import Image from "next/image"

export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={"/img/cover.jpg"}
            alt = "cover"
            fill={true}
            objectFit="cover"/>
            <div className={styles.bannerText}>
                <h1>ระบบจองฉีดวัคซีน</h1>
            </div>
        </div>
    )
}