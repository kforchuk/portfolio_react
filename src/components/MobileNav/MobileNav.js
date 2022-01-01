import React from 'react'
import { User32, Code32, Portfolio32, Education32 } from '@carbon/icons-react'

import {Container, Spacer, NavWrapper, NavButton, NavLink} from './styles'

const MobileNav =()=>{
    return(
        <Container>
            <Spacer />
            <NavWrapper>
                <NavLink to="/portfolio_react/">
                    <NavButton
                    hasIconOnly
                    renderIcon={User32}
                    iconDesctription="Me"
                    tooltipPosition ="bottom"
                    />
                </NavLink>
                <NavLink to = "/portfolio_react/projects">
                    <NavButton
                    hasIconOnly
                    renderIcon={Code32}
                    iconDesctription="Projects"
                    tooltipPosition ="bottom"
                    />
                </NavLink>
                <NavLink to="/portfolio_react/work">
                    <NavButton
                    hasIconOnly
                    renderIcon={Portfolio32}
                    iconDesctription="Work"
                    tooltipPosition="bottom" 
                    />
                </NavLink>
                <NavLink to="/portfolio_react/education">
                    <NavButton
                    hasIconOnly
                    renderIcon={Education32}
                    iconDesctription ="Education"
                    tooltipPosition="bottom" 
                    />
                </NavLink>
            </NavWrapper>
        </Container>
    )
}

export default MobileNav