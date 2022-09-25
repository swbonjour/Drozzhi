import React from "react";

import './Feedback.scss'

import { Text, Button } from "src/components";

export function Feedback() {
    return (
        <div className="feedback">
            <header className="feedback__header">
                <Text text="Оставьте заявку" fontSize="xl" fontWeight="m"></Text>
            </header>
            <main className="feedback__main">
                <div className="feedback__main__left_side">
                    <div className="feedback__main__left_side__profile">
                        <img src={require('src/img/avatar.png')} alt="avatar" width={200} height={200} className="feedback__main__left_side__profile_img"/>
                        <Text text="Юлия Дижа" fontSize="s" fontWeight="m" className="feedback__main__left_side__profile_name"></Text>
                        <Text text="Поможет запустить ваш проект" className="feedback__main__left_side__profile_description"></Text>
                    </div>
                    <div className="feedback__main__left_side__download">
                        <Text text="Скачать брифинги на:" fontSize="s" fontWeight="m"></Text>
                        <div className="feedback__main__left_side__download_links">
                                <a href="#" className="feedback__main__left_side__download_links_link"><Text text="разработку логотипа ->" fontSize="xs" color="light_red" className="feedback__main__left_side__download_links_text"></Text></a>
                                <a href="#" className="feedback__main__left_side__download_links_link"><Text text="разработку сайта ->" fontSize="xs" color="light_red" className="feedback__main__left_side__download_links_text"></Text></a>
                                <a href="#" className="feedback__main__left_side__download_links_link"><Text text="разработку лендинга ->" fontSize="xs" color="light_red" className="feedback__main__left_side__download_links_text"></Text></a>
                        </div>
                    </div>
                </div>
                <div className="feedback__main__right_side">
                    <div>
                        <div>
                            <form action="post" className="feedback__main__right_side__form">
                            <Text text="Ваше имя *" fontSize="xs" color="light_gray"></Text>
                            <div className="feedback__main__right_side__input_div">
                            <input className="feedback__main__right_side__input" type="text" />
                            </div>
                            <Text text="Телефон или мессенджер *" fontSize="xs" color="light_gray"></Text>
                            <div className="feedback__main__right_side__input_div">
                            <input className="feedback__main__right_side__input" type="text" />
                            </div>
                            <Text text="Краткое описание задачи *" fontSize="xs" color="light_gray"></Text>
                            <div className="feedback__main__right_side__input_div">
                            <input className="feedback__main__right_side__input" type="text" />
                            </div>
                            <Button size="medium" backgroundColor="light_red" border="true" borderRadius="medium" className="feedback__main__right_side__button"><Text text="Отправить" fontSize="s" color="white"></Text></Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}