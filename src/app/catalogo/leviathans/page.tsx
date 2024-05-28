"use client";

import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";
import { CatalogItem } from "@/components/catalog/CatalogItem";

import white from "@/assets/rares/leviathans/white.png";
import black from "@/assets/rares/leviathans/black.png";

export default function Leviathans() {
  const catalogItems = [
    {
      image: white.src,
      price: 40,
      title: "The Leviatha",
      furniName: "lostc_merdragon",
    },
    {
      image: black.src,
      price: 40,
      title: "Black Leviathan",
      furniName: "dark_merdragon",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Leviathans</Heading>

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
