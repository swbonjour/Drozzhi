import React from 'react'

import './PortfolioItem.scss'

import { Text } from 'src/components/atoms'

export type PortfolioItemProps = {
  tag: string
  article: string
  smallTag: string
  backgroundColor: string
}

export function PortfolioItem({ tag, article, smallTag, backgroundColor }: PortfolioItemProps) {
  return (
    <div>
      <div className={`portfolio_item__content portfolio_item__content_${backgroundColor}`}>
        <div>
          <Text text={tag} fontSize='xs' color='white' className='portfolio_item__content_tag'></Text>
        </div>
      </div>
      <section>
        <Text text={article} fontSize='s' fontWeight='m' className='portfolio_item__content_article'></Text>
        <Text text={smallTag} color='light_gray' className='portfolio_item__content_small_tag'></Text>
      </section>
    </div>
  )
}
