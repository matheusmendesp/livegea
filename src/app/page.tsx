"use client";
import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import { Container, Divider, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" className="flex items-center justify-center">
        <CustomCard variant="outlined" sx={{ borderRadius: 2, padding: 4 }}>
          <Heading>Documentação da GeA Habblive</Heading>
          <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
          <p>
            Bem-vindo/a. Esta é uma simples página de documentação para os
            integrantes da equipe Gamers em Ação Habblive.
          </p>
          <p>
            Neste site será possível encontrar documentos como tabela de
            pagamentos por área e serviço, catálogo de raros para troca dos
            pontos e outros.
          </p>
          <Divider sx={{ marginBlock: 4 }} />
          <Stack
            divider={<Divider orientation="vertical" />}
            direction="column"
            spacing={0.5}
          >
            <Link
              href="/pagamento"
              className="
                rounded-full text-blue-500 font-bold px-4 py-2 bg-blue-400/10 transition-all
                hover:bg-blue-400/20
                active:bg-blue-400/40
              "
            >
              Tabela de pagamento
            </Link>
            <Link
              href="/catalogo"
              className="
                rounded-full text-blue-500 font-bold px-4 py-2 bg-blue-400/10 transition-all
                hover:bg-blue-400/20
                active:bg-blue-400/40
              "
            >
              Catálogo
            </Link>
          </Stack>
        </CustomCard>
      </Container>
    </>
  );
}
