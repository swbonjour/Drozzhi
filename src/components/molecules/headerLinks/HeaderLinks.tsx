import React from 'react'
import { Link } from 'react-scroll'

import './HeaderLinks.scss'

import { Button, Text } from 'src/components/atoms'

export function HeaderLinks() {
  return (
    <nav>
      <ul className="header_links__ul">
        <li className="header_links__ul_li" style={{cursor: "pointer"}}>
          <Link to="portfolio" spy={true} smooth={true} offset={-90} duration={500}>
            <Text text="Портфолио" color="black" fontSize='xs'></Text>
          </Link>
        </li>
        <li className="header_links__ul_li" style={{cursor: "pointer"}}>
          <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>
            <Text text="О компании" color="black" fontSize='xs'></Text>
          </Link>
        </li>
        <li className="header_links__ul_li" style={{cursor: "pointer"}}>
          <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>
            <Text text="Контакты" color="black" fontSize='xs'></Text>
          </Link>
        </li>
        <li className="header_links__ul_li" style={{cursor: "pointer"}}>
          <Link to="feedback" spy={true} smooth={true} offset={-90} duration={500}>
            <Button size="small" backgroundColor="light_red" border='true' borderRadius='small'>
              <Text text="Оставить заявку" color="white" fontSize='xs'></Text>
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
