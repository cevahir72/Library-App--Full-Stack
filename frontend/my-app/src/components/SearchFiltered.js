import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
// MUI IMPORTS
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from '@mui/material/Pagination';
//REDUX IMPORTS
import { filterBooks } from "../redux/bookSlice";


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
  background:"#019898",
  color:"white"
}));

const BookCell = styled(Paper)(() => ({
  height: "6vh",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  paddingLeft:"2rem"
}));

const UpTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#019898",
  '&:hover': {
    backgroundColor: "#067f7f",
  },
}));

const SearchFiltered = ({keyword,setKeyword}) => {
  // *************** HANDLE FUNCTIONS FOR REDUX *************
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.bookList);
  const bookCount = useSelector((state)=>state.book.bookCount)

  const [orderFiltered, setOrderFiltered] = useState("ASC");
  const [pageFiltered, setPageFiltered] = useState(1);
 
 

  const handleOrderChange = (event) => {
    setOrderFiltered(event.target.value);
  };

  const handlePageChange = (event, value) =>{
    setPageFiltered(value);
  }

  const fetchAllBooks = ()=>{
    setKeyword("")
  } 


  useEffect(() => {  
    dispatch(filterBooks({keyword,orderFiltered,pageFiltered}))
}, [ orderFiltered, pageFiltered,keyword])

  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <Paper elevation={3} sx={{ width: "90%", minHeight: "80vh" }}>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              paddingLeft: "1rem",
            }}
          >
            <ColorButton
              size="large"
              variant="contained"
              onClick={()=>fetchAllBooks()}
            >
              GET ALL BOOKS
            </ColorButton>
          </Box>
          <Box sx={{ flex: "1" }}>
            <Header variant="h4" textAlign="center" sx={{ marginTop: "2rem" }}>
              Book List
            </Header>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              paddingRight: "0.5rem",
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Order
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={orderFiltered}
                onChange={handleOrderChange}
                label="Order"
              >
                <MenuItem value={"ASC"}>Name Ascending</MenuItem>
                <MenuItem value={"DESC"}>Name Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        {!(bookList.length === 0)  ? (
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ padding: "1rem" }}
          >
            <Grid item xs={3}>
              <Title>
                <UpTitle variant="h5">Book Name</UpTitle>
              </Title>
            </Grid>
            <Grid item xs={3}>
              <Title>
                <UpTitle variant="h5">Category</UpTitle>
              </Title>
            </Grid>
            <Grid item xs={3}>
              <Title>
                <UpTitle variant="h5">Author</UpTitle>
              </Title>
            </Grid>
            <Grid item xs={3}>
              <Title>
                <UpTitle variant="h5">Publisher</UpTitle>
              </Title>
            </Grid>
            {bookList.map((item) => {
              return (
                <>
                  <Grid item xs={3} key={item.id}>
                    <BookCell>
                      <UpTitle variant="h5">{item.book}</UpTitle>
                    </BookCell>
                  </Grid>
                  <Grid item xs={3}>
                    <BookCell>
                      <UpTitle variant="h5">{item.category.category}</UpTitle>
                    </BookCell>
                  </Grid>
                  <Grid item xs={3}>
                    <BookCell>
                      <UpTitle variant="h5">{item.author.author}</UpTitle>
                    </BookCell>
                  </Grid>
                  <Grid item xs={3}>
                    <BookCell>
                      <UpTitle variant="h5">{item.publisher.publisher}</UpTitle>
                    </BookCell>
                  </Grid>
                </>
              );
            })}
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center",alignItems:"center",height:"10rem"}}>
            <Pagination count={Math.floor(bookCount/5)} page={pageFiltered} onChange={handlePageChange} size="large"/>
            </Grid>
          </Grid>
        ) : (
          <Box>
            <Typography textAlign="center">
              Please Press "GET ALL BOOKS" Button for displaying book list. Also
              you can start with the Search Bar.
            </Typography>
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default SearchFiltered;
