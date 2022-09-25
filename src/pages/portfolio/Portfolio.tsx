import React from 'react'

import './Portfolio.scss'

import { Text, PortfolioItem, Button } from 'src/components'

export function Portfolio() {
  return (
    <div>
      <div className="portfolio__content">
        <header className="portfolio__header">
          <Text text="Портфолио" color="black" fontSize="xl" fontWeight="m"></Text>
          <a href="#" className="portfolio__header_link">
            <Text text="СМОТРЕТЬ ВСЕ ->" color="light_red"></Text>
          </a>
        </header>
        <section className='portfolio__section'>
          <PortfolioItem
            tag="МАРКЕТИНГ"
            article="«Натали» — Ивановский трикотаж оптом"
            smallTag="Редизайн сайта, поддержка сайта"
            backgroundColor="purple"
          ></PortfolioItem>
          <PortfolioItem
            tag="ВЕБ РАЗРАБОТКА"
            article="Podium — эротический массаж"
            smallTag="Разработка, редизайн"
            backgroundColor="pink"
          ></PortfolioItem>
          <PortfolioItem
            tag="ВЕДЕНИЕ РЕКЛАМНОЙ КОМПАНИИ"
            article="Аудит отдела маркетинга и продаж для Название бренда"
            smallTag="Аудит, маркетинг сюда кратко теги"
            backgroundColor="red"
          ></PortfolioItem>
          <PortfolioItem
            tag="МАРКЕТИНГ"
            article="Аудит отдела маркетинга и продаж для Название бренда"
            smallTag="Аудит, маркетинг сюда кратко теги"
            backgroundColor="green"
          ></PortfolioItem>
          <PortfolioItem
            tag="МАРКЕТИНГ"
            article="Аудит отдела маркетинга и продаж для Название бренда"
            smallTag="Аудит, маркетинг сюда кратко теги"
            backgroundColor="light_blue"
          ></PortfolioItem>
          <PortfolioItem
            tag="МАРКЕТИНГ"
            article="Аудит отдела маркетинга и продаж для Название бренда"
            smallTag="Аудит, маркетинг сюда кратко теги"
            backgroundColor="blue"
          ></PortfolioItem>
        </section>
        <Button size='large' border='true' borderRadius='medium' className="portfolio__button"><Text text='ВСЕ КЕЙСЫ' color='light_red'></Text></Button>
      </div>
    </div>
  )
}
