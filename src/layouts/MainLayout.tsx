import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, IconButton, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import AssetSearch from 'src/components/shared/AssetSearch';
import AssetList from 'src/components/shared/AssetList';
import PageLinearLoader from 'src/components/shared/PageLinearLoader';

import AppBar from './mainLayout/AppBar';
import Drawer from './mainLayout/Drawer';
import DrawerHeader from './mainLayout/DrawerHeader';

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Asset Explorer - Messari
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <AssetSearch />
        <Divider />
        <AssetList />
      </Drawer>
      <Box
        component="main"
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DrawerHeader />
        <Box sx={{ position: 'relative', flexGrow: 1 }}>
          <PageLinearLoader />
          <Box sx={{ p: 2, height: '100%' }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
