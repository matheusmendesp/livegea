import { CatalogNavItem } from "@/components/catalog/CatalogNavItem";
import { CustomCard } from "@/components/mui/Card";

import duck from "@/assets/rare_colourable_duck_1_icon.png";
import bonnie from "@/assets/rare_colourable_pillow_1_icon.png";
import tamandua from "@/assets/tamandua.png";
import maquina from "@/assets/maquina.png";
import pinguim from "@/assets/blue_penguim_icon.png";
import sorveteira from "@/assets/rare_colourable_icecream_1_icon.png";
import leviathan from "@/assets/lostc_merdragon_icon.png";
import gemas from "@/assets/gemas.png";
import bau from "@/assets/sw_chest_icon.png";
import vip from "@/assets/duck_vipwhite_icon.png";

export default function CatalogAsideNavigation() {
  return (
    <CustomCard
      variant="outlined"
      sx={{
        padding: 0,
        height: "fit-content",
        gridArea: "aside",
      }}
    >
      <h1 className="px-3 py-4 bg-slate-500 text-white font-bold text-xl text-center">
        Catálogo de raros
      </h1>

      <CatalogNavItem
        href="ducks"
        title="Patos"
        image={duck.src}
        imageAlt="Miniatura de um pato"
      />

      <CatalogNavItem
        href="bonnies"
        title="Bonnies"
        image={bonnie.src}
        imageAlt="Miniatura de uma almofada azul"
      />

      <CatalogNavItem
        href="tamandua"
        title="Tamanduás"
        image={tamandua.src}
        imageAlt="Miniatura de um Tamandua"
      />

      <CatalogNavItem
        href="maquinas"
        title="Máquinas"
        image={maquina.src}
        imageAlt="Miniatura de uma maquina"
      />

      <CatalogNavItem
        href="pinguins"
        title="Pinguins"
        image={pinguim.src}
        imageAlt="Miniatura de um pinguim azul"
      />

      <CatalogNavItem
        href="sorveteiras"
        title="Sorveteiras"
        image={sorveteira.src}
        imageAlt="Miniatura de uma sorveteira azul"
      />

      <CatalogNavItem
        href="leviathans"
        title="Leviathans"
        image={leviathan.src}
        imageAlt="Miniatura de um leviathan"
      />

      <CatalogNavItem
        href="gemas"
        title="Gemas e pixels"
        image={gemas.src}
        imageAlt="Gemas e Pixels"
      />

      <CatalogNavItem
        href="rarosaleatorios"
        title="Super raros aleatórios"
        image={bau.src}
        imageAlt="Miniatura de um baú"
      />

      <CatalogNavItem
        href="aleatorios"
        title="Aleatórios"
        image={vip.src}
        imageAlt="Miniatura de um pato segurando uma placa escrito VIP"
      />
    </CustomCard>
  );
}
