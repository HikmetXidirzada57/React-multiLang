import { AppBar, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./footer.scss"
const Footer = () => {
  return (
    <footer>
        <Container>
            <Grid container>
                <Grid item md={4}>
                    <div className="logo">
                        <Typography variant='h2'>
                            Logo
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </footer>
  )
}

export default Footer