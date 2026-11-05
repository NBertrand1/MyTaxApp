import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material'
import NavBar from './shared/Navbar'
import './App.css'

const features = [
  { number: '01', title: 'Consultation des taxes', description: 'Accéder aux informations relatives aux taxes et obligations fiscales.' },
  { number: '02', title: 'Calcul des montants', description: 'Visualiser une estimation des montants dus selon les paramètres prévus.' },
  { number: '03', title: 'Suivi des paiements', description: 'Consulter l’état des paiements et leur historique.' },
  { number: '04', title: 'Espace contribuable', description: 'Centraliser les informations et les démarches du contribuable.' },
  { number: '05', title: 'Reçus', description: 'Prévoir la consultation et la génération de reçus de paiement.' },
]

function App() {
  return (
    <Box className="tax-app">
      <NavBar />
      <Box component="main">
        <Box id="home" className="tax-hero">
          <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={7}>
                <Chip label="PROTOTYPE DE CONCEPTION" className="prototype-chip" />
                <Typography variant="h1" className="tax-title">Simplifier la gestion de vos <span>obligations fiscales.</span></Typography>
                <Typography className="tax-intro">MyTaxApp est une proposition d’interface destinée à faciliter l’accès aux informations fiscales et le suivi des démarches des contribuables.</Typography>
                <Box className="tax-actions">
                  <Button variant="contained" href="#features">Découvrir le concept</Button>
                  <Button variant="outlined" href="#about">À propos du projet</Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Card className="tax-preview" elevation={0}>
                  <CardContent>
                    <Typography className="preview-label">ESPACE CONTRIBUABLE</Typography>
                    <Typography variant="h5">Vue d’ensemble</Typography>
                    <Box className="preview-row"><span>Taxes à consulter</span><strong>—</strong></Box>
                    <Box className="preview-row"><span>État des paiements</span><Chip size="small" label="Aperçu" /></Box>
                    <Box className="preview-row"><span>Reçus disponibles</span><strong>—</strong></Box>
                    <Typography className="preview-footnote">Données illustratives — aucune donnée fiscale réelle.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container maxWidth="lg" id="features" className="tax-section">
          <Typography className="section-kicker">FONCTIONNALITÉS ENVISAGÉES</Typography>
          <Typography variant="h2" className="section-title">Un parcours fiscal plus lisible.</Typography>
          <Typography className="section-description">Les modules ci-dessous représentent le périmètre fonctionnel étudié pendant la phase d’analyse et de conception.</Typography>
          <Grid container spacing={2} className="feature-grid">
            {features.map(feature => (
              <Grid item xs={12} sm={6} md={4} key={feature.number}>
                <Card className="feature-card" elevation={0}>
                  <CardContent>
                    <span className="feature-number">{feature.number}</span>
                    <Typography variant="h6">{feature.title}</Typography>
                    <Typography>{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box id="about" className="about-band">
          <Container maxWidth="lg">
            <Typography className="section-kicker">À PROPOS</Typography>
            <Typography variant="h2" className="section-title">Un projet au stade de la conception.</Typography>
            <Typography className="section-description">Ma contribution a porté sur l’analyse du besoin, la conception de la solution et la réalisation des interfaces frontend. Cette démonstration présente une direction d’interface ; elle ne constitue pas une plateforme fiscale opérationnelle. Aucun paiement, calcul officiel ou traitement de données de contribuables n’est connecté.</Typography>
          </Container>
        </Box>
      </Box>
      <Box component="footer" className="tax-footer">
        <Container maxWidth="lg"><Typography>MyTaxApp · Projet de conception · Beker</Typography></Container>
      </Box>
    </Box>
  )
}

export default App
