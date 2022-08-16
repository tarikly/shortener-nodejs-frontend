import React from "react";
import { Logo, HeaderContainer } from  './styles';

import Icone from '../../assets/chillies.png';

function Header(props) {
    return (
        <>
          <HeaderContainer>
              <Logo src={Icone} alt='Chillies - Encurtador URL'/>
              <h1>Chillies</h1>
              <p>{props.children}</p>
          </HeaderContainer>
        </>
    )
}

export default Header;