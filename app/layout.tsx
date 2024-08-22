import "./globals.css";
import ReactQueryProvider from "../app/Providers/ReactQueryProvider";
import StyledComponentsRegistry from "../app/Providers/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="vn">
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
