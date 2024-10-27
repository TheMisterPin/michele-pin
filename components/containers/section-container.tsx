/* eslint-disable no-nested-ternary */
import React from 'react'

interface Props {
  children: React.ReactNode
  title?: string | React.ReactNode
  id?: string
  className?: string
  titleClass?: string
}

export default function SectionContainer({
  children,
  title,
  id,
  className,
  titleClass
}: Props) {
  return (
    <section
      id={id}
      className={`flex flex-col justify-center lg:p-12 md:p-4 sm:p-2 p-2 w-full min-h-full snap-start ${className}`}
    >
      <div className="mt-5 rounded-md min-w-10/12 min-h-[90vh]">
        {title ? (
          typeof title === 'string' ? (
            <h2 className={`${titleClass}`}>{title}</h2>
          ) : (
            title
          )
        ) : null}

        {children}
      </div>
    </section>
  )
}
