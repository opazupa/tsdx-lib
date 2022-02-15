import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';

/**
 * PageHeaderProps
 */
export interface PageHeaderProps {
  // Page header title
  title: string;
  // Optional subtitle
  subTitle?: string;
  // Apply home page styling
  homePage?: boolean;
  // React children after title/subtitle
  children?: React.ReactNode;
  // Action content on the right side
  actionContent?: React.ReactNode;
}

export const TEST_HEADER_TAG = 'page-header';
export const TEST_HEADER_ACTIONS_TAG = 'page-header-actions';

/**
 * PageHeader component
 *
 * @param {PageHeaderProps}
 */
export const PageHeader: FC<PageHeaderProps> = ({
  title,
  subTitle,
  homePage,
  children,
  actionContent,
}: PageHeaderProps) => (
  <div data-cy={TEST_HEADER_TAG} data-testid={TEST_HEADER_TAG}>
    <Grid container direction="row" alignItems="center" justify="space-between">
      {/* Title and subtitle */}
      <div
        style={{
          maxWidth: actionContent ? '60%' : '80%',
        }}
      >
        <h1>{title}</h1>
        {subTitle && (homePage ? <h3>{subTitle}</h3> : <p>{subTitle}</p>)}
        {children}
      </div>
      {actionContent && (
        <div
          data-cy={TEST_HEADER_ACTIONS_TAG}
          data-testid={TEST_HEADER_ACTIONS_TAG}
        >
          {actionContent}
        </div>
      )}
    </Grid>
  </div>
);
