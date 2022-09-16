import * as React from 'react'
import { Box, Drawer, Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'


export default function Basket() {
    const [state, setState] = React.useState({
        isOpen: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={toggleDrawer('isOpen', false)}
            onKeyDown={toggleDrawer('isOpen', false)}
        >
            {'Добавленные товары'}
        </Box>
    )

    return (
        <div>
            {
                <React.Fragment>
                    <Button sx={{ m: 1 }}
                        variant='contained'
                        onClick={toggleDrawer('isOpen', true)}>
                        <ShoppingBasketIcon />
                    </Button>
                    <Drawer
                        anchor={'right'}
                        open={state['isOpen']}
                        onClose={toggleDrawer('isOpen', false)}
                    >
                        {list('isOpen')}
                    </Drawer>
                </React.Fragment>
            }
        </div>
    )
}
