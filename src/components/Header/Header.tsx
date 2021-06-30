import React from 'react';
import Style, { HeaderContainerProps } from './Header.style';
import { SearchInput } from '../SearchInput/SearchInput';

export function Header(props: HeaderContainerProps) {
  const { background } = props;
  return (
    <Style.HeaderContainer background={background}>
      <Style.H1>The Greatest Movies you find here:</Style.H1>
      <SearchInput />
    </Style.HeaderContainer>
  );
}
