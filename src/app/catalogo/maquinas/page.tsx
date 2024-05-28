"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import maquina1 from "@/assets/rares/maquinas/maquina1.png";
import maquina2 from "@/assets/rares/maquinas/maquina2.png";
import maquina3 from "@/assets/rares/maquinas/maquina3.png";
import maquina4 from "@/assets/rares/maquinas/maquina4.png";
import maquina5 from "@/assets/rares/maquinas/maquina5.png";

export default function Maquinas() {
  const catalogItems = [
    {
      image: maquina1.src,
      price: 90,
      title: "ads_droetker_paula",
      furniName: "ads_droetker_paula",
    },
    {
      image: maquina2.src,
      price: 90,
      title: "Bobba Cola Automat",
      furniName: "Schnapp' dir ne Coke!",
    },
    {
      image: maquina3.src,
      price: 90,
      title: "ads_sunnyvend",
      furniName: "ads_sunnyvend",
    },
    {
      image: maquina4.src,
      price: 90,
      title: "ihu_bbaente",
      furniName: "ihu_bbaente",
    },
    {
      image: maquina5.src,
      price: 90,
      title: "Cherry Crush Soda Machine",
      furniName: "Limited Edition Cherry Crush!",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Máquinas</Heading>
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
