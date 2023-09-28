import {AppBar,Toolbar,Button,Typography ,Stack,IconButton}  from '@mui/material'
 import CssBaseline from '@mui/material/CssBaseline'
const Navbar2 =()=>{
    return (
        <>
        <AppBar position='static'>
            <CssBaseline/>
            <Toolbar>
            <Stack direction='row'spacing={2}>
            <IconButton size='large' edge='End' color='inherit' aria-label='logo' spacing={2}>
          <h2>logo</h2></IconButton>
            <Typography variant='h5' component='div' sx={{flexGrow:2}}>
            
            </Typography>
           
            <Button color='inherit' >Features</Button>
            
                <Button  color="inherit">home</Button>
                <Button  color="inherit">about</Button>
                <Button  color="inherit">contact</Button>
            </Stack>
            </Toolbar> 
        </AppBar>

{/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Stack direction='row'spacing={2}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
       <Link
              variant="cotained"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      </Stack> */}


        
        </>
    )
}
export default Navbar2