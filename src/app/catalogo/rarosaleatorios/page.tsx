"use client";

import { Heading } from "@/components/Heading";
import { CatalogItem } from "@/components/catalog/CatalogItem";
import { CustomCard } from "@/components/mui/Card";
import { Divider } from "@mui/material";

import castor from "@/assets/rares/supers/Castor.png";
import exotic from "@/assets/rares/supers/Exotic_Butterfly.png";
import aloe from "@/assets/rares/supers/aloe_vera.png";
import escorpiao from "@/assets/rares/supers/escorpiao.png";
import foca from "@/assets/rares/supers/foca.png";
import fornalha from "@/assets/rares/supers/furnace.png";
import pig from "@/assets/rares/supers/pig.png";
import voodoo from "@/assets/rares/supers/voodoo.png";

export default function RarosAleatorios() {
  const catalogItems = [
    {
      image: castor.src,
      price: 120,
      title: "Bloupm et Rufus, les deux compères",
      furniName: "Bloupm et Rufus, les deux compères",
    },
    {
      image: exotic.src,
      price: 130,
      title: "Exotic Butterfly",
      furniName: "An elusive beauty.",
    },
    {
      image: aloe.src,
      price: 100,
      title: "Aloe Vera",
      furniName: "Aloe Vera",
    },
    {
      image: escorpiao.src,
      price: 250,
      title: "Escorpião",
      furniName: "Raro Custom",
    },
    {
      image: foca.src,
      price: 250,
      title: "Foca",
      furniName: "rare_prize20_2 desc",
    },
    {
      image: fornalha.src,
      price: 120,
      title: "Fornalha",
      furniName: "Raro Custom",
    },
    {
      image: pig.src,
      price: 600,
      title: "Porquinho",
      furniName: "Schweei",
    },
    {
      image: voodoo.src,
      price: 180,
      title: "Voodoo",
      furniName: "Choose your punishment!",
    },
  ];

  return (
    <CustomCard variant="outlined">
      <Heading>Aleatórios</Heading>

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
