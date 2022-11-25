import React from 'react';
import { FooterPropsType } from './Footer.interface';

const Footer = ({ greeting }: FooterPropsType) => {
  return (
    <div data-testid="footer-component">
      <div data-testid="footer-this-is">This is</div>
      <div>Footer</div>
      <div data-testid="footer-props-greeting">{greeting}</div>
    </div>
  );
};

export default Footer;
