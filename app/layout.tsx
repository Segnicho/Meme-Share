import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/hocs/Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ClerkProvider>
            <Navbar userId={userId} />
            <main>{children}</main>
          </ClerkProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
