import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ margin: "20px" }}>
        <ProductCard
          name="วัคซีนไข้หวัดใหญ่ (Influenza)"
          text="ควรฉีดปีละครั้ง แม้จะเป็นสายพันธุ์ที่เคยฉีดมาก่อน และควรฉีดก่อนฤดูฝน"
        />
      </div>
    </main>
  );
}
