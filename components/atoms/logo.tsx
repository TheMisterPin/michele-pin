import Image from 'next/image'
import React from 'react'

export default function Logo({
  variant,
  className
}: {
  variant?: string
  className?: string
}) {
  switch (variant) {
    case 'large':
      return (
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className={`h-32 w-auto ${className}`}
        />
      )
    case 'icon':
      return (
        <Image
          src="/images/tmp-logo.png"
          alt="logo"
          width={100}
          height={100}
          className={`h-32 w-auto ${className}`}
        />
      )
    default:
      return (
        <Image
          src="/images/tmp-logo.png"
          alt="logo"
          width={100}
          height={100}
          className={className}
        />
      )
  }
}
