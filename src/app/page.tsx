import React from 'react';
import Banner from '@/components/Banner';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-wrap justify-around items-center p-6">
        <ProductCard
          name="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
        />
        <ProductCard
          name="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
        />
        <ProductCard
          name="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  );
}
