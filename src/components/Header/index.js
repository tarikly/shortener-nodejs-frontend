import React from "react";
import { Logo, HeaderContainer } from  './styles';

import Icone from '../../assets/chillies.png';

function Header(props) {
    return (
        <>
          <HeaderContainer>
              <Logo src={Icone} alt='Pitu - Encurtador URL'/>
              <h1>Pitu</h1>
              <p>{props.children}</p>
          </HeaderContainer>
        </>
    )
}

export default Header;