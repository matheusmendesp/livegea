"use client";
import { IconButton } from "@mui/material";
import DrawerMenu from "./DrawerMenu";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function handleCloseDrawer() {
    setDrawerIsOpen(false);
  }

  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }

  return (
    <header className="flex flex-row items-center gap-2 px-6 py-3 bg-slate-200 mb-6">
      <IconButton onClick={handleOpenDrawer}>
        <Menu className="text-black w-6 h-6" />
      </IconButton>
      <DrawerMenu isOpen={drawerIsOpen} handleClose={handleCloseDrawer} />

      <Link href="/">
        <strong>GeA Docs</strong>
      </Link>
    </header>
  );
}
