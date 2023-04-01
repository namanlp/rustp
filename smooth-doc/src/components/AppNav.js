import { RiGithubFill } from 'react-icons/ri'


import React from 'react'
import { Nav, NavList, NavListItem, NavLink } from './Nav'
import { ColorModeSwitcher } from './ColorModeSwitcher'

import book from "./book-solid.svg"
import "./AppNavStyle.css"

export function AppNav() {
    return (
        <Nav>
            <NavList>
                <NavListItem>

                    <NavLink
                        forwardedAs="a"
                        href="/basic-programs/input-single-number/"
                        aria-label="Browse Guides"
                        className = "nav_link"
                    >
                        <img alt="Browse Guides" src={book} height="24" className="navBook" />
                    </NavLink>
                </NavListItem>

                <NavListItem>
                    <NavLink
                        forwardedAs="a"
                        href="https://github.com/namanlp/rustp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website's Github Repository"
                    >
                        <RiGithubFill style={{ width: 24, height: 24 }} />
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink aria-label="Switch Theme" as={ColorModeSwitcher} />
                </NavListItem>
            </NavList>
        </Nav>
    )
}