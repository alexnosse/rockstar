import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Style from './NavigationBar.style';
import logo from '../../assets/logo.png';
import { LinkButton } from '../LinkButton/LinkButton';

export function NavigationBar() {
  const returnHomePage = useCallback(() => {}, []);
  return (
    <Style.NavWrapper>
      <Style.NavContainer>
        <Link to={`/`}>
          <Style.Logo src={logo} onClick={returnHomePage} />
        </Link>
        <div className="browser">Browser</div>
        <LinkButton address="https://google.com">Login</LinkButton>
        <LinkButton
          hasBorder={true}
          borderColor={'#d73d00'}
          address="https://twitch.tv"
        >
          Sign up
        </LinkButton>
      </Style.NavContainer>
    </Style.NavWrapper>
  );
}
