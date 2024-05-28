"use client";
import { Heading } from "@/components/Heading";
import { CustomCard } from "@/components/mui/Card";
import {
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Pagamento() {
  function createData(
    service: string,
    team: number | string,
    gea: number | string
  ) {
    return {
      service,
      team,
      gea,
    };
  }

  const paymentTableRows = [
    // serviço - preço equipe - preço gea
    createData("Construção pequena", 40, 80),
    createData("Construção média", 80, 120),
    createData("Construção grande", 120, 200),
    createData("Programação pequena", 40, 80),
    createData("Programação média", 80, 120),
    createData("Programação grande", 120, 200),
    createData("Logo", 120, 200),
    createData("Expositor", 80, 140),
    createData("Emblema", 60, 120),
    createData("Emblema de ranking", "40 (+10/emblema)", 80),
    createData("Ads de quarto", 160, 240),
    createData("Ads de click", 60, 120),
    createData("Edição de ads de quarto", 60, 100),
    createData("Edição de ads de click", 30, 60),
    createData("Grosser", 80, 140),
    createData("Flyers", 100, 140),
  ];

  return (
    <Container maxWidth="lg">
      <CustomCard variant="outlined">
        <Heading>Tabela de pagamento</Heading>

        <Divider sx={{ marginTop: 2, marginBottom: 4 }} />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serviço</TableCell>
                <TableCell>Valor Equipe</TableCell>
                <TableCell>Valor GeA</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paymentTableRows.map((row) => {
                return (
                  <TableRow key={row.service}>
                    <TableCell component="th" scope="row">
                      {row.service}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.team}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      {row.gea}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomCard>
    </Container>
  );
}
