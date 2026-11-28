import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  // Per-page <title>/meta come from each route's head(); this is the shared base.
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CivilTec · Congresso de Tecnologia em Construções" },
      {
        name: "description",
        content:
          "Evento de 3 a 6 de maio de 2027 no Campus VIII da UEPB, em Araruna — PB.",
      },
      { name: "theme-color", content: "#171715" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/assets/civiltec/06-favicon/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/civiltec/06-favicon/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/civiltec/06-favicon/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

// The document. There is no index.html: the server renders <html> from here.
function RootDocument({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body data-react-root="true">
        {children}
        <Scripts />
      </body>
    </html>
  );
}