import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define custom theme with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const ProductMarketingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
        Introducing LuxGuard: Your Ultimate Luxury Car Care Solution
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src="/luxguard1.jpg" alt="Product" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              What Makes Our Product Stand Out
            </Typography>
            <Typography variant="body1" paragraph>
            LuxGuard is the go-to solution for luxury car owners seeking unparalleled protection and care for their prized vehicles. Our comprehensive system offers advanced ceramic coating to shield your car's paintwork from environmental damage and minor scratches, while also providing interior protection to maintain its luxurious appearance.
            </Typography>
            <Typography variant="body1" paragraph>
            Additionally, LuxGuard offers glass protection coatings for enhanced visibility and durability, along with custom detailing packages to keep your luxury car looking flawless. Optional extended warranty coverage provides added peace of mind, allowing you to drive with confidence knowing you're fully covered.
            </Typography>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <img src="/luxguard 2.jpg" alt="Feature 1" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/luxguard3.jpg" alt="Feature 2" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="/luxguard4.jpg" alt="Feature 3" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default ProductMarketingPage;
