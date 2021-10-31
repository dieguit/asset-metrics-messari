import React from 'react';
import { FormControl, InputLabel, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function AssetSearch() {
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="asset-search">Find an asset</InputLabel>
      <Input
        id="asset-search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
