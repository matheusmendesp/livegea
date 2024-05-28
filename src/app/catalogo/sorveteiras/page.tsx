"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import jadeGreen from "@/assets/rares/ice_cream_machines/jade_green.png";
import green21 from "@/assets/rares/ice_cream_machines/green_21.png";
import mintBlue from "@/assets/rares/ice_cream_machines/mint_blue.png";
import vibrantRed from "@/assets/rares/ice_cream_machines/vibrant_red.png";
import yellow from "@/assets/rares/ice_cream_machines/yellow.png";

export default function Sorveteiras() {
  const catalogItems = [
    {
      image: jadeGreen.src,
      price: 50,
      title: "Verde Jade",
      furniName: "ngh1_icecream*30",
    },
    {
      image: green21.src,
      price: 50,
      title: "Verde 21",
      furniName: "ngh1_icecream*21",
    },
    {
      image: yellow.src,
      price: 70,
      title: "Amarelo",
      furniName: "Ostergelbe Eismaschine",
    },
    {
      image: vibrantRed.src,
      price: 70,
      title: "Vermelho Vibrante",
      furniName: "Osterrote Eismaschine",
    },
    {
      image: mintBlue.src,
      price: 50,
      title: "Azul Menta",
      furniName: "ngh1_icecream*13",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Sorveteiras</Heading>

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
