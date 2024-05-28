"use client";

import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomCard = styled(Card)<CardProps>(() => ({
  borderRadius: 8,
  padding: 32,
  marginBottom: 24,
}));
