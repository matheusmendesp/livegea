import { CatalogBreadCrumbs } from "@/components/CatalogBreadCrumbs";
import CatalogAsideNavigation from "@/components/catalog/CatalogAsideNavigation";
import { CustomContainer } from "@/components/mui/Container";
import { ReactNode } from "react";

export default function CatalogoLayout({ children }: { children: ReactNode }) {
  return (
    <CustomContainer
      sx={{
        display: "grid",
        gridTemplateAreas: "'aside main'",
        gridTemplateColumns: "324px 1fr",
        gap: 4,

        "@media (max-width: 1024px)": {
          gridTemplateColumns: "1fr",
          gridTemplateAreas: "'main' 'aside'",
        },
      }}
      maxWidth="lg"
    >
      <CatalogAsideNavigation />

      <main className="w-full" style={{ gridArea: "main" }}>
        <CatalogBreadCrumbs />
        {children}
      </main>
    </CustomContainer>
  );
}
