"use client";

import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";
import { CatalogItem } from "@/components/catalog/CatalogItem";

import gemas from "@/assets/rares/gemasandpixels/gemas.png";
import pixels from "@/assets/rares/gemasandpixels/pixels.png";



export default function Pisos() {
  const catalogItems = [
    {
      image: gemas.src,
      price: 100,
      title: "Gemas",
      furniName: "Gemas",
    },
    {
      image: pixels.src,
      price: 100,
      title: "Pixels",
      furniName: "Pixels",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Gemas e Pixels</Heading>

      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

      <div
        className="grid grid-cols-3 gap-4
      max-sm:grid-cols-2
      max-[384px]:grid-cols-1"
      >
        {catalogItems.map((item) => (
          <CatalogItem
            image={item.image}
            price={item.price}
            title={item.title}
            furniName={item.furniName}
            key={item.title}
          />
        ))}
      </div>
    </CustomCard>
  );
}
