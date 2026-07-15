import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  path: "/termos",
  title: "Termos de Uso",
  description: "Termos de Uso da sastur.",
  noindex: true,
});

export default function TermosPage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-navy-900">
        Termos de Uso
      </h1>
      <p className="mt-4 text-muted-foreground">
        Conteúdo em preparação. Esta página conterá os Termos de Uso da sastur.
      </p>
    </Container>
  );
}
