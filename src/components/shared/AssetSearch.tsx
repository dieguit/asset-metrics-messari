import React from 'react';
import { FormControl, InputLabel, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function AssetSearch() {
  // @TODO: I am disabling this component because API does not support search
  // and it makes no sense searching only in fetched pages.
  // I can integrate graphql into this, but I think it's out of scope.
  return null;

  // return (
  //   <FormControl sx={{ m: 1 }} variant="standard">
  //     <InputLabel htmlFor="asset-search">Find an asset</InputLabel>
  //     <Input
  //       id="asset-search"
  //       startAdornment={
  //         <InputAdornment position="start">
  //           <SearchIcon />
  //         </InputAdornment>
  //       }
  //     />
  //   </FormControl>
  // );
}
