import Link from "next/link"
import './globals.css'
import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: 'Master Vet Workspace',
  description: 'Workspace for Master Vet',
  keywords: 'Master Vet, มาสเตอร์ เวท'
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <Navbar />
            <main className='container'>
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default layout