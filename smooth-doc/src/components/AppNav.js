import { RiGithubFill, RiTwitterFill } from 'react-icons/ri'
import {FaBook} from "react-icons/fa";

import React from 'react'
import { Nav, NavList, NavListItem, NavLink } from './Nav'
import { ColorModeSwitcher } from './ColorModeSwitcher'

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
                        <FaBook style={{ width: 24, height: 24 }} />
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
                    <NavLink
                        forwardedAs="a"
                        href="https://twitter.com/rustp_official"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                    >
                        <RiTwitterFill style={{ width: 24, height: 24 }} />
                    </NavLink>
                </NavListItem>

                <NavListItem>
                    <NavLink aria-label="Switch Theme" as={ColorModeSwitcher} />
                </NavListItem>
            </NavList>
        </Nav>
    )
}