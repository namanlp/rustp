import { RiGithubFill, RiTwitterFill } from 'react-icons/ri'

import React from 'react'
import {
  Nav,
  NavList,
  NavListItem,
  NavLink,
  ColorModeSwitcher,
} from 'smooth-doc/components'


export function AppNav() {
  return (
    <Nav>
      <NavList>
          <NavListItem>
            <NavLink
              forwardedAs="a"
              href="https://github.com/namanlp/rustp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="This website's Github Repository"
            >
              <RiGithubFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>

          <NavListItem>
            <NavLink
              forwardedAs="a"
              href="https://twitter.com/namanlp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Twitter Account"
            >
              <RiTwitterFill style={{ width: 24, height: 24 }} />
            </NavLink>
          </NavListItem>
        <NavListItem>
          <NavLink aria-label="Switch Theme" forwardedAs={ColorModeSwitcher} />
        </NavListItem>
      </NavList>
    </Nav>
  )
}
