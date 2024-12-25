

import './globals.css';

// export const metadata: Metadata = {
//   title: 'Lunar New Year Countdown',
//   description: 'Countdown to Lunar New Year 2024',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}