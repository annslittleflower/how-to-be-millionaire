// import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Game from './Game';

 

describe('<Game />', () => {
  it('fetch data and render', async () => {

    render(<Game />);

    const allProductElements = await screen.findAllByTestId('product');

    expect(allProductElements).toHaveLength(3);
  });

  it('add items to backet', async () => {
    // render(<Game />, { wrapper });
    render(<Game />);

    const allProductElements = await screen.findAllByTestId('product');

    await userEvent.click(allProductElements[0]);
    await userEvent.click(allProductElements[1]);

    await userEvent.click(screen.getByText('add'));

    const allBasketElement = await screen.findAllByTestId('basket-product');
    expect(allBasketElement).toHaveLength(2);

    const total = screen.getByTestId('total');

    expect(total.textContent).toBe('Total: 2');
  });

});