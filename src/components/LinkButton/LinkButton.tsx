import React, { ReactElement } from 'react';
import Style from './LinkButton.style';

export interface LinkButtonProps {
  children: ReactElement | string;
  hasBorder?: boolean;
  borderColor?: string;
  address: string;
}
export function LinkButton(props: LinkButtonProps) {
  const { children, hasBorder, borderColor, address } = props;

  return (
    <Style.LinkButtonContainer
      hasBorder={hasBorder ?? false}
      borderColor={borderColor}
    >
      <a href={address}>{children}</a>
    </Style.LinkButtonContainer>
  );
}
