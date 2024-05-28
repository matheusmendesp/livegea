import Link from "next/link";

interface CatalogNavItem {
  image: string;
  imageAlt?: string;
  title: string;
  href: string;
}

export function CatalogNavItem({
  image,
  title,
  imageAlt,
  href,
}: CatalogNavItem) {
  return (
    <Link
      href={"/catalogo/" + href}
      className="
      p-3 [&:not(:first-child)]:border-t border-gray-200 flex gap-3 items-center w-full bg-white transition-all duration-75
      hover:bg-gray-50
      "
    >
      <div className="p-1 rounded-md bg-gray-200 aspect-square flex items-center justify-center w-12">
        <img src={image} alt={imageAlt ?? ""} />
      </div>
      <span className="font-bold text-gray-800">{title}</span>
    </Link>
  );
}
