import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  path: "/privacidade",
  title: "Política de Privacidade",
  description: "Política de Privacidade da sastur.",
  noindex: true,
});

export default function PrivacidadePage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-navy-900">
        Política de Privacidade
      </h1>
      <p className="mt-4 text-muted-foreground">
        Conteúdo em preparação. Esta página conterá a Política de Privacidade da
        sastur, em conformidade com a LGPD.
      </p>
    </Container>
  );
}
