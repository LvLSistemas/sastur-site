/**
 * Renders a JSON-LD <script> for Rich Snippets. Server component —
 * emits structured data directly into the HTML for crawlers.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static content we build server-side.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
