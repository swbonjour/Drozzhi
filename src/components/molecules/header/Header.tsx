import React from 'react'

import './Header.scss'

import { LogoSVG } from 'src/img/logo'
import { HeaderLinks } from '../headerLinks/HeaderLinks'

export function Header() {
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
}
