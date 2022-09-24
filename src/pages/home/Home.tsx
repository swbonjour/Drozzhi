import React from 'react'

import './Home.scss'

import { Header, Text } from 'src/components'

import { WhatsApp } from 'src/img/whatsApp'
import { Telegram } from 'src/img/telegram'

export function Home() {
  return (
    <main className="home">
      <div className="home__content">
        <Header></Header>
        <Text text="Маректинговое агенство. С нами вы растете как на дрожжах" className="home__content_text"></Text>
        <div className="home__contact">
          <div className="home__contact_item">
            <WhatsApp></WhatsApp>
            <a href="#" className="home__contact_item_text"><Text text="WHATSAPP" color='gray'></Text></a>
          </div>
          <div className="home__contact_item">
            <Telegram></Telegram>
            <a href="#" className="home__contact_item_text"><Text text="TELEGRAM" color='gray'></Text></a>
          </div>
        </div>
      </div>
    </main>
  )
}
