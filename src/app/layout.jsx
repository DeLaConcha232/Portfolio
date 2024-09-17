
import "../styles/globals.css";
import {Providers} from "./providers";

export const metadata = {
  title: "Portfolio",
  description: "Development of my profesional Portfolio",
  charSet: "UTF-8",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
