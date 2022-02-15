import * as React from 'react';
import { Button } from '@material-ui/core';
import { TeaLoader, PageHeader } from '../.';

export const App = () => {
  return (
    <div style={{ padding: '0 25px' }}>
      <PageHeader
        title="Welcome to the playground."
        actionContent={
          <>
            <Button variant="outlined" color="secondary">
              Action!
            </Button>
          </>
        }
      >
        <h3 className="blink">🔥🔥🔥🔥🔥</h3>
      </PageHeader>
      {/* PUT in your own components here to play with them */}
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          alignSelf: 'center',
          justifySelf: 'center',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TeaLoader />
        <Button
          style={{ margin: '5px', width: '100px' }}
          variant="contained"
          color="primary"
        >
          Click me!!
        </Button>
      </div>
    </div>
  );
};
