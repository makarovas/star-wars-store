import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('<App />', () => {
  test('renders app', () => {
    render(<App />);
    screen.getByTestId('app')
  });
})