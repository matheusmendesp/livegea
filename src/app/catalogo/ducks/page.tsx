"use client";

import { CatalogItem } from "@/components/catalog/CatalogItem";
import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import black from "@/assets/rares/ducks/duck_black.png";
import bronze from "@/assets/rares/ducks/duck_bronze.png";
import golden from "@/assets/rares/ducks/duck_golden.png";
import jade from "@/assets/rares/ducks/duck_jade.png";
import silver from "@/assets/rares/ducks/duck_silver.png";

export default function Ducks() {
  const catalogItems = [
    {
      image: black.src,
      price: 115,
      title: "Patinho Black",
      furniName: "Black DuckLamp",
    },
    {
      image: bronze.src,
      price: 115,
      title: "Patinho Bronze",
      furniName: "Bronze DuckLamp",
    },
    {
      image: golden.src,
      price: 115,
      title: "Patinho Golden",
      furniName: "Golden DuckLamp",
    },
    {
      image: jade.src,
      price: 115,
      title: "Patinho Jade",
      furniName: "Jade DuckLamp",
    },
    {
      image: silver.src,
      price: 115,
      title: "Patinho Silver",
      furniName: "Silver DuckLamp",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Patos</Heading>

      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

      <div
        className="
      grid grid-cols-3 gap-4
      max-sm:grid-cols-2
      max-[384px]:grid-cols-1
      "
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
