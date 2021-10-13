import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'

function Header({handleCart}) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' 
        component='span'
        sx={{flexGrow: 1}}
        >
          MUI Shop
        </Typography>

        <IconButton
        color='inherit'
        onClick={handleCart}>
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
