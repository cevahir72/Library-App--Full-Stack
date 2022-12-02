import React from "react";
import {Box, Typography, Grid, Paper} from '@mui/material';
import { styled } from "@mui/material/styles";

const Header = styled(Typography)(({ theme }) => ({
  margin: "1rem 0",
  marginBottom: "3rem",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1rem",
    fontSize: "2rem",
  },
}));

const Title = styled(Paper)(() => ({
  height: "6vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const UpTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));



const Search = () => {
  return (
    <div style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 width:"100%",
                 height:'90vh',
    }}>
      <Paper elevation={3} sx={{minWidth:'90%',minHeight:"80vh"}}>
          <Header variant='h4' textAlign='center'sx={{marginTop:'2rem'}}>Book List</Header>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{padding:"1rem"}}>
        <Grid item xs={5}>
            <Title>
              <UpTitle variant="h5">Book Name</UpTitle>
            </Title>
          </Grid>
          <Grid item xs={2}>
            <Title>
              <UpTitle variant="h5">Category</UpTitle>
            </Title>
          </Grid>
          <Grid item xs={3}>
            <Title>
              <UpTitle variant="h5">Author</UpTitle>
            </Title>
          </Grid>
          <Grid item xs={2}>
            <Title>
              <UpTitle variant="h5">Publisher</UpTitle>
            </Title>
          </Grid>
       </Grid>
        
          
      </Paper>
    </div>
  );
};

export default Search;
