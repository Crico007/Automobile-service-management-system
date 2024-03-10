import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define custom theme with Poppins font and dark mode
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'dark', // Enable dark mode
  },
});

const MembershipPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Membership Plans
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Basic Membership
                </Typography>
                <Typography variant="body1">
                  - Access to our luxury car collection<br />
                  - Priority service at our facilities<br />
                  - Exclusive member events<br />
                  - 24/7 concierge support<br />
                  - Limited to 2 vehicles
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary">
                  Join Now
                </Button>
              </CardActions>
              <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mt: 2 }}>
                $99.99/mo
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Platinum Membership
                </Typography>
                <Typography variant="body1">
                  - All benefits of Premium Membership<br />
                  - Unlimited access to our entire car collection<br />
                  - Chauffeur service for special occasions<br />
                  - Priority booking for luxury events<br />
                  - No vehicle limit
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary">
                  Join Now
                </Button>
              </CardActions>
              <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mt: 2 }}>
                $299.99/mo
              </Typography>
            </Card>
          </Grid>
          {/* Add one more Grid item for the new membership */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ p: 2, boxShadow: 'none' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Premium Plus Membership
                </Typography>
                <Typography variant="body1">
                  - All benefits of Premium Membership<br />
                  - Additional services for ultimate luxury experience<br />
                  - Exclusive access to high-end events<br />
                  - VIP concierge services<br />
                  - No vehicle limit
                </Typography>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary">
                  Join Now
                </Button>
              </CardActions>
              <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mt: 2 }}>
                $499.99/mo
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default MembershipPage;
