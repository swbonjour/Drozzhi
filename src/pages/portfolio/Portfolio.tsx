import React from 'react'

import './Portfolio.scss'

import { Text } from 'src/components'

export function Portfolio() {
  return (
    <div>
      <div className="portfolio__content">
        <header className="portfolio__header">
          <Text text="Портфолио" color="black" fontSize="xl" fontWeight="m"></Text>
          <a href="#" className="portfolio__header_link"><Text text="СМОТРЕТЬ ВСЕ ->" color="light_red"></Text></a>
        </header>
      </div>
    </div>
  )
}
