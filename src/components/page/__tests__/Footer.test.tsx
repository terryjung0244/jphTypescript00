import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';
import { FooterPropsType } from '../Footer.interface';

const renderComponent = (props: FooterPropsType) => render(<Footer {...props} />);

describe('src/components/page/Footer', () => {
  let props: FooterPropsType;
  const greeting = 'hello';

  beforeEach(() => {
    props = {
      greeting: greeting,
    };
  });
  it('render Footer component', () => {
    const { getByTestId } = renderComponent(props);
    const footerComponent = getByTestId('footer-component');
    expect(footerComponent).toBeInTheDocument();
  });
  it('should contain this is text', () => {
    const { getByTestId } = renderComponent(props);
    const footerThisIs = getByTestId('footer-this-is');
    expect(footerThisIs).toHaveTextContent('This is');
  });
  it('should match props value', () => {
    const { getByTestId } = renderComponent(props);
    const footerProps = getByTestId('footer-props-greeting');
    expect(footerProps).toHaveTextContent(greeting);
  });
});
