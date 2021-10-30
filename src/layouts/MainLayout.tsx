import React from 'react';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(234, 238, 243)',
      }}
    >
      {children}
    </Box>
  );
}
