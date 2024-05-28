"use client";

import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function CatalogBreadCrumbs() {
  const currentSegment = useSelectedLayoutSegment();

  return (
    <Breadcrumbs aria-label="breadcrumb" className="mb-3">
      <Link href="/" className="hover:text-sky-500 active:text-sky-600">
        GeA Docs
      </Link>

      {currentSegment ? (
        <Link
          href="/catalogo"
          className="hover:text-sky-500 active:text-sky-600"
        >
          Catálogo
        </Link>
      ) : (
        <span className="text-black cursor-default">Catálogo</span>
      )}

      {currentSegment && (
        <span className="text-black cursor-default">
          {currentSegment.charAt(0).toUpperCase() +
            currentSegment.slice(1, currentSegment.length)}
        </span>
      )}
    </Breadcrumbs>
  );
}
