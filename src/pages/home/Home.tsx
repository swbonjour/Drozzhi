import React from 'react'
import { useState } from "react"

import './Home.scss'

import { Header, Text } from 'src/components'

import { WhatsApp } from 'src/img/whatsApp'
import { Telegram } from 'src/img/telegram'

export function Home() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  window.addEventListener('resize', () => {
    setWidth(document.documentElement.clientWidth)
  })
  if(width > 320) {
    return (
      <main className="home">
        <div className="home__content">
          <Header></Header>
          <div className="home__content_text">
          <Text text="Маректинговое агенство. С нами вы растете как на дрожжах"></Text>
          </div>
          <div className="home__contact" id="contact">
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
  } else {
    return (
      <main className="home">
        <div className="home__content">
          <Header></Header>
          <div className="home__content_text">
          <Text text="Маректинговое агенство. С нами вы растете как на дрожжах"></Text>
          </div>
          <div className="home__contact" id="contact">
              <a href="#"><WhatsApp></WhatsApp></a>
              <a href="#"><Telegram></Telegram></a>
          </div>
        </div>
      </main>
    )
  }
}
