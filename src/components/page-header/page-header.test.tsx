import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from '@material-ui/core';
import '@testing-library/jest-dom';

import { PageHeader, TEST_HEADER_TAG, TEST_HEADER_ACTIONS_TAG } from '.';

const TEST_TITLE = 'Test title for nav bar';
const TEST_SUB_TITLE = 'sub title!';

describe('PageHeader', () => {
  it('plain look', async () => {
    const { queryByText, findByTestId, queryByTestId } = render(
      <PageHeader title={TEST_TITLE} />
    );

    const header = await findByTestId(TEST_HEADER_TAG);
    const actions = queryByTestId(TEST_HEADER_ACTIONS_TAG);
    const title = queryByText(TEST_TITLE);
    const subTitle = queryByText(TEST_SUB_TITLE);

    expect(header).toBeInTheDocument();
    expect(actions).toBeFalsy();
    expect(title).toBeInTheDocument();
    expect(subTitle).not.toBeInTheDocument();
  });

  it('with actions', async () => {
    const { queryByText, findByTestId, queryByTestId, findByText } = render(
      <PageHeader
        homePage
        title={TEST_TITLE}
        subTitle={TEST_SUB_TITLE}
        actionContent={
          <>
            <Button>Test Action!</Button>
          </>
        }
      />
    );

    const header = await findByTestId(TEST_HEADER_TAG);
    const actions = queryByTestId(TEST_HEADER_ACTIONS_TAG);
    const title = queryByText(TEST_TITLE);
    const subTitle = queryByText(TEST_SUB_TITLE);
    const actionButton = await findByText(/Test Action!/);
    fireEvent.click(actionButton);

    expect(header).toBeInTheDocument();
    expect(actions).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
  });
});
