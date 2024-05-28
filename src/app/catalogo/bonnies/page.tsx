"use client";

import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import { CatalogItem } from "@/components/catalog/CatalogItem";

import snow from "@/assets/rares/bonnies/A Snow Drift.png";
import pitaya from "@/assets/rares/bonnies/Fel Roze Kussen.png";
import grassGreen from "@/assets/rares/bonnies/Felgroen Kussen.png";
import yellow from "@/assets/rares/bonnies/Gelbes Kissen.png";
import musgGreen from "@/assets/rares/bonnies/Legergroen Kussen.png";
import lemmonGreen from "@/assets/rares/bonnies/rillow9.png";

export default function Bonnies() {
  const catalogItems = [
    {
      image: yellow.src,
      price: 50,
      title: "Amarelo claro",
      furniName: "Gelbes Kissen",
    },
    {
      image: snow.src,
      price: 40,
      title: "Neve",
      furniName: "A Snow Drift",
    },
    {
      image: musgGreen.src,
      price: 50,
      title: "Verde musgo",
      furniName: "Legergroen Kussen",
    },
    {
      image: lemmonGreen.src,
      price: 60,
      title: "Verde limão",
      furniName: "rillow*9",
    },
    {
      image: grassGreen.src,
      price: 100,
      title: "Verde grama",
      furniName: "Felgroen Kussen",
    },
    {
      image: pitaya.src,
      price: 120,
      title: "Pitaya Rosa",
      furniName: "Fel Roze Kussen",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Bonnies</Heading>

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
