import React, { FC } from 'react';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Grid } from '@material-ui/core';

export const CREATOR_TEST_TAG = 'creator';

/**
 * Powered By Props
 *
 * @export
 * @interface PoweredByProps
 */
export interface PoweredByProps {
  /** Hide creator tag */
  hideCreator?: boolean;
}

/**
 * Powered By component
 *
 * @param {PoweredByProps}
 */
export const PoweredBy: FC<PoweredByProps> = ({
  hideCreator = false,
}: PoweredByProps) => (
  <>
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid container direction="row" alignItems="center" justify="center">
        Powered by <FavoriteBorder style={{ color: 'red', display: 'flex' }} />
      </Grid>
      {!hideCreator && (
        <Grid data-testid={CREATOR_TEST_TAG}>
          <strong style={{ fontSize: '0.75rem' }}>Opa 🚀🍗</strong>
        </Grid>
      )}
    </Grid>
  </>
);
