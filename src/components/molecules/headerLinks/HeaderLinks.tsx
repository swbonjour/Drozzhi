import React from 'react'

import './HeaderLinks.scss'

import { Button, Text } from 'src/components/atoms'

export function HeaderLinks() {
  return (
    <nav>
      <ul className="header_links__ul">
        <li className="header_links__ul_li">
          <a href="#" style={{ textDecoration: 'none' }}>
            <Text text="Портфолио" color="black" fontSize='xs'></Text>
          </a>
        </li>
        <li className="header_links__ul_li">
          <a href="#" style={{ textDecoration: 'none' }}>
            <Text text="О компании" color="black" fontSize='xs'></Text>
          </a>
        </li>
        <li className="header_links__ul_li">
          <a href="#" style={{ textDecoration: 'none' }}>
            <Text text="Контакты" color="black" fontSize='xs'></Text>
          </a>
        </li>
        <li className="header_links__ul_li">
          <a href="#" style={{ textDecoration: 'none' }}>
            <Button size="small" backgroundColor="light_red" border='true' borderRadius='small'>
              <Text text="Оставить заявку" color="white" fontSize='xs'></Text>
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  )
}
