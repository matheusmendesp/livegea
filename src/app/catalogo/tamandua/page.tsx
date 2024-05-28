"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import yellow from "@/assets/rares/tamandua/amarelo.png";
import gray from "@/assets/rares/tamandua/cinza.png";
import brown from "@/assets/rares/tamandua/marrom.png";
import black from "@/assets/rares/tamandua/preto.png";
import green from "@/assets/rares/tamandua/verde.png";


export default function Tamandua() {
  const catalogItems = [
    {
      image: gray.src,
      price: 100,
      title: "Cinza",
      furniName: "rare_prize22_12",
    },
    {
      image: brown.src,
      price: 100,
      title: "Amarelo",
      furniName: "rare_prize22_0",
    },
    {
      image: black.src,
      price: 100,
      title: "Preto",
      furniName: "rare_prize22_2",
    },
    {
      image: yellow.src,
      price: 100,
      title: "Amarelo",
      furniName: "rare_prize22_3",
    },
    {
      image: green.src,
      price: 100,
      title: "Verde",
      furniName: "rare_prize22_11",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Tamanduás</Heading>

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
