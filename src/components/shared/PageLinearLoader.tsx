import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';

const PageLinearLoader = () => {
  const router = useRouter();
  const [routing, setRouting] = useState(false);

  const handleRouteStart = useCallback(() => {
    setRouting(true);
  }, [setRouting]);

  const handleRouteComplete = useCallback(() => {
    setRouting(false);
  }, [setRouting]);

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteComplete);
    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);

  if (!routing) {
    return null;
  }

  return (
    <Box sx={{ width: '100%', position: 'absolute' }}>
      <LinearProgress />
    </Box>
  );
};

export default PageLinearLoader;
