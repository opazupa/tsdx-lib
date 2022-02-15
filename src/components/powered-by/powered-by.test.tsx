import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PoweredBy, CREATOR_TEST_TAG } from '.';

describe('Powered By', () => {
  it('with creator visible', async () => {
    const { findByText, findByTestId } = render(<PoweredBy />);
    await findByText(/Powered by/);
    const creator = await findByTestId(CREATOR_TEST_TAG);
    expect(creator).toBeInTheDocument();
  });

  it('with creator hidden', async () => {
    const { findByText, queryByTestId } = render(<PoweredBy hideCreator />);
    await findByText(/Powered by/);
    const creator = queryByTestId(CREATOR_TEST_TAG);
    expect(creator).not.toBeInTheDocument();
  });
});
