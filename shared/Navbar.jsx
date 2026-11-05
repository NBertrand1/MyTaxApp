import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

const NavBar = () => (
  <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#142c3b', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
    <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
      <Typography component="a" href="#home" variant="h6" sx={{ flexGrow: 1, color: '#fff', textDecoration: 'none', fontWeight: 800, letterSpacing: '-.5px' }}>
        MyTax<span style={{ color: '#70c8b4' }}>App</span>
      </Typography>
      <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 2 } }}>
        <Button href="#home" color="inherit" sx={{ textTransform: 'none' }}>Accueil</Button>
        <Button href="#features" color="inherit" sx={{ textTransform: 'none' }}>Fonctionnalités</Button>
        <Button href="#about" color="inherit" sx={{ textTransform: 'none' }}>Projet</Button>
      </Box>
    </Toolbar>
  </AppBar>
)

export default NavBar
