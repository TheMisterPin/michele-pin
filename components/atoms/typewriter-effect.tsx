import { useTranslations } from 'next-intl'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const TypeWriteEffect = () => {
  const t = useTranslations('Options')

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        `${t('react')}`,
        1000,
        `${t('web')}`,
        1000,
        `${t('solver')}`,
        1000,
        `${t('creative')}`,
        1000,
        `${t('welcome')}`,
        1000
      ]}
      wrapper="span"
      cursor={false}
      speed={35}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] sfumato font-bold"
    />
  )
}

export default TypeWriteEffect
