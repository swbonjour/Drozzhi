import React from "react";

import './About.scss'

import { Text, Button } from "src/components";

export function About() {
    return (
        <div className="about">
            <header className='about__header' id="about">
                <Text text='О компании' fontSize="xl" fontWeight="m"></Text>
                <div className='about__header_enumeration'>
                    <Text text='5' color='light_red' fontSize="m"></Text><Text text='отделов' fontSize="m"></Text>
                    <Text text='5' color='light_red' fontSize="m"></Text><Text text='маректологов' fontSize="m"></Text>
                    <Text text='3' color='light_red' fontSize="m"></Text><Text text='дизайнера' fontSize="m"></Text>
                    <Text text='3' color='light_red' fontSize="m"></Text><Text text='копирайтера' fontSize="m"></Text>
                    <Text text='7' color='light_red' fontSize="m"></Text><Text text='разработчиков' fontSize="m"></Text>
                </div>
            </header>
            <main className="about__main">
                <div className="about__main_left_side">
                    <div className="about__main_left_side__description">
                        <Text text="Мы — команда специалистов с опытом, энтузиазмом и лёгким недосыпом. Маркетинговое агентство «Дрожжи» было основано "></ Text>
                        <Text text="в 2015 году, как компания, где можно получить комплексное интернет- и oффлайн-продвижение. На сегодняшний день мы   не        зависим ни от ниши, ни от географии, ни от специфики продукта. "></Text>
                        <Text text="В портфолио компании сотни успешных кейсов, способных помочь вам в реализации своей идеи."></Text>
                    </div>
                    <div className="about__main_left_side__statistics">
                        <div className='about__main_left_side__statistics_projects'>
                            <Text text="1000+" fontSize="x" fontWeight="m" color="light_red"></Text>
                            <Text text="реализованных проектов" className='about__main_left_side__statistics_projects_text'></Text>
                        </div>
                        <div className='about__main_left_side__statistics_projects'>
                            <Text text="92" fontSize="x" fontWeight="m" color="light_red"></Text>
                            <Text text="клиента доверили нам свои проекты" className='about__main_left_side__statistics_projects_text'></Text>
                        </div>
                        <div className='about__main_left_side__statistics_projects'>
                            <Text text="5+" fontSize="x" fontWeight="m" color="light_red"></Text>
                            <Text text="лет успешной работы" className='about__main_left_side__statistics_projects_text'></Text>
                        </div>
                    </div>
                    <Button size='large' border="true" borderRadius="medium" className="about__main_left_side__button"><Text text="ПОДРОБНЕЕ" fontSize="xs" color="light_red"></Text></Button>
                </div>
                <div className="about__main_right_side">
                    <img src={require('src/img/team.png')} alt="team" className="about__main_right_side__img"/>
                    <Text text="Команда агентства «Дрожжи»" fontSize="xs" color="light_gray" className="about__main_right_side__text"></Text>
                </div>
            </main>
        </div>
    )
}