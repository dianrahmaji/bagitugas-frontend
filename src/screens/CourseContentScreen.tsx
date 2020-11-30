import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../components/Header';

const ContentDetailsScreen: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Typography
          component="h1"
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          Content Title
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          Materials
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          Task
        </Typography>
      </Container>
    </div>
  );
};

export default ContentDetailsScreen;
