import React from "react";

import { useState } from "react"

import { Text } from "src/components/atoms";

import './Burger.scss'

export function Burger() {
    const [open, setOpen] = useState(false)

    function openBurger() {
        setOpen(!open)
    }

    if(!open) {
        return (
            <div className="burger" onClick={openBurger}>
                <div className="burger__line_one"></div>
                <div className="burger__line_two"></div>
                <div className="burger__line_three"></div>
            </div>
        )
    } else {
        return (
            <div className="burger" onClick={openBurger}>
                <div className="burger__line_one__rotated"></div>
                <div className="burger__line_two__rotated"></div>
                <div className="burger__opened">
                    <div className="burger__opened_link"><Text text="Портфолио"></Text></div>
                    <div className="burger__opened_link"><Text text="О Компании"></Text></div>
                    <div className="burger__opened_link"><Text text="Контакты"></Text></div>
                </div>
            </div>
        )
    }
}