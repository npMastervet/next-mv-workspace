import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <>
    <Image
      src="/asset/images/IconLogo.webp"
      width={50}
      height={50}
      alt="Picture of the author"
    />
    </>
  )
}

export default Logo