import React from 'react';
import { Container, Typography, Box, Link } from '@material-ui/core';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://1184yang.github.io/">
        J.Y. Yang
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
