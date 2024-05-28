import { Chip } from "@mui/material";
import { CustomCard } from "../mui/Card";

interface CatalogItemProps {
  image: string;
  title: string;
  furniName?: string;
  price: number;
}

export function CatalogItem({
  image,
  price,
  title,
  furniName,
}: CatalogItemProps) {
  return (
    <CustomCard sx={{ margin: 0 }} variant="outlined">
      <div className="p-2 w-full h-min bg-gray-100 flex items-center justify-center rounded-lg mb-3">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-0 text-sm mb-3">
        <span className="font-bold">{title}</span>
        {furniName && (
          <span className="text-gray-800 break-words">{furniName}</span>
        )}
      </div>
      <Chip label={`${price} pontos da GeA`} sx={{ fontWeight: "bold" }} />
    </CustomCard>
  );
}
