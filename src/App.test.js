import { render, screen } from '@testing-library/react';
import Card from './components/Card';
import { Button, HeroSection, Home } from './components';
import Booking from './pages/Booking';
import Title from './components/Title';


test('Renders the Title heading', () => {
  render(<Title/>);
  
});

test('renders button', () => {
  render(<Button/>);
});



test('renders card', () => {
  render(<Card/>);
});


test('button has the correct text', () => {
  const buttonText = 'My Button';

  const { getByText } = render(
    <Button text={buttonText} />
  );

  const button = getByText(buttonText);

  expect(button).toBeInTheDocument();
});

