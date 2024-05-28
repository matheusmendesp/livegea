"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import black from "@/assets/rares/penguins/black.png";
import citrine from "@/assets/rares/penguins/citrine.png";
import emerald from "@/assets/rares/penguins/emerald.png";
import brown from "@/assets/rares/penguins/brown.png";
import pearl from "@/assets/rares/penguins/pearl.png";

export default function Pinguins() {
  const catalogItems = [
    {
      image: black.src,
      price: 100,
      title: "Preto",
      furniName: "Black Baby Penguin",
    },
    {
      image: emerald.src,
      price: 100,
      title: "Esmeralda",
      furniName: "Emerald Baby Penguin",
    },
    {
      image: pearl.src,
      price: 100,
      title: "Pérola",
      furniName: "Pearl Baby Penguin",
    },
    {
      image: brown.src,
      price: 100,
      title: "Marrom",
      furniName: "Brown Baby Penguin",
    },
    {
      image: citrine.src,
      price: 100,
      title: "Amarelo",
      furniName: "Citrine Baby Penguin",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Pinguins</Heading>

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
