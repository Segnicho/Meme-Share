"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store";
import AuthProvider from "@/hocs/AuthProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Provider store={store}>
            <Navbar />
            <main>{children}</main>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
