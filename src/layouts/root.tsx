export function RootLayout({
  children,
}: {
  children: JSX.Element | Iterable<JSX.Element>;
}) {
  return (
    <html>
      <head>
        <title>My App</title>
        <script src="https://unpkg.com/htmx.org@1.9.11"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
