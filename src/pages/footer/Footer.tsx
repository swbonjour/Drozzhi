import React from "react";

import './Footer.scss'

import { Text } from "src/components";
import { LogoSVG } from "src/img/logo";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__line"></div>
            <div className="footer__content">
                <Text text="2015-2021 © Дрожжи™" color="light_gray"></Text>
                <Text text="ООО «РВБ-Маркетинг»" color="light_gray"></Text>
                <Text text="Политика конфиденциальности" color="light_gray"></Text>
            </div>
            <div className="footer__logo">
                <LogoSVG fill="black"></LogoSVG>
            </div>
        </footer>
    )
}