import React from 'react';
import Style from './Header.style';
import logo from '../../assets/logo.png';
import { LinkButton } from '../LinkButton/LinkButton';
import { SearchInput } from '../SearchInput/SearchInput';

export function Header() {
  return (
    <Style.HeaderContainer>
      <Style.NavContainer>
        <Style.Logo src={logo} />
        <div className="browser">Browser</div>
        <LinkButton address="https://google.com">Login</LinkButton>
        <LinkButton
          hasBorder={true}
          borderColor={'#CC1E25'}
          address="https://twitch.tv"
        >
          Sign up
        </LinkButton>
      </Style.NavContainer>
      <Style.H1>
        The Best available movies 
      </Style.H1>
      <SearchInput />
    </Style.HeaderContainer>
  );
}
