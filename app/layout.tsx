import Link from "next/link"
import './globals.css'
import Navbar from "@/components/Navbar";
import { Metadata } from "next";



const layout = ({ children }) => {
  return (
    <html>
      <body>    
        <Navbar />    
        {children}
      </body>
    </html>
  )
}

export default layout