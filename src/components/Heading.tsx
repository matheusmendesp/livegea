import { ReactNode } from "react";

interface HeadingProps {
  children: string | ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
