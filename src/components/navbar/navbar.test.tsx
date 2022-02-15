import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { NavBar } from '.';

const TEST_TITLE = 'TEst title for nav bar';

describe('NavBar', () => {
  it('without title', async () => {
    const { findByAltText, queryByText } = render(<NavBar />, {
      wrapper: MemoryRouter,
    });
    const logo = await findByAltText(/logo/);
    // Try to click the logo
    fireEvent.click(logo);

    const title = queryByText(TEST_TITLE);
    expect(title).not.toBeInTheDocument();
  });

  it('with title', async () => {
    const { findByAltText, queryByText } = render(
      <NavBar title={TEST_TITLE} />,
      {
        wrapper: MemoryRouter,
      }
    );
    await findByAltText(/logo/);
    const title = queryByText(TEST_TITLE);
    expect(title).toBeInTheDocument();
  });
});
