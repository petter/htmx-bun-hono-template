export function RootLayout({
  children,
}: {
  children: JSX.Element | Iterable<JSX.Element>;
}) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
