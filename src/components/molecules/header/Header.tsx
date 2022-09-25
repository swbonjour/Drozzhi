import React from 'react'
import { useEffect, useState } from 'react'

import './Header.scss'

import { LogoSVG } from 'src/img/logo'
import { HeaderLinks } from '../headerLinks/HeaderLinks'
import { Burger } from '../burger/Burger'

export function Header() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  window.addEventListener('resize', () => {
    setWidth(document.documentElement.clientWidth)
  })

  if(width > 320) {
    return (
      <header className="header">
        <div className="header__logo">
          <LogoSVG></LogoSVG>
        </div>
        <nav>
          <HeaderLinks></HeaderLinks>
        </nav>
      </header>
    )
  } else {
    return (
      <header className="header">
        <div className="header__logo">
          <LogoSVG></LogoSVG>
        </div>
        <nav>
          <Burger></Burger>
        </nav>
      </header>
    )
  }
}
