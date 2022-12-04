import React from "react";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAuthors,
  fetchCategories,
  fetchPublishers,
} from "../redux/createSlice";
import Divider from "@mui/material/Divider";

//STYLES  /////////////////////////////////

const ColorButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#f99f64",
  "&:hover": {
    backgroundColor: "#f9b080",
  },
}));

const InputBox = styled(Button)(() => ({
  marginTop: "1.5rem",
  width: "100%",
}));

//////////STYLES ENDS //////////////////////

const Create = () => {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [value, setValue] = React.useState('1');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleChangePublisher = (event) => {
    setPublisher(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authorList = useSelector((state) => state.create.authorList);
  const categoryList = useSelector((state) => state.create.categoryList);
  const publisherList = useSelector((state) => state.create.publisherList);

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchCategories());
    dispatch(fetchPublishers());
  }, []);

  return (
    <div style={{ backgroundColor: "#eaf6f6" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "#019898",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar sx={{ minWidth: "90%", display: "flex" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flex: "1",
                justifyContent: "start",
              }}
            >
              <ColorButton variant="contained" onClick={() => navigate("/")}>
                BACK TO MAIN
              </ColorButton>
            </Box>
            <Box sx={{ flex: "1", display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ fontWeight: "600" }}
              >
                CREATING NEW BOOK
              </Typography>
            </Box>
            <Box sx={{ flex: "1", display: "flex", justifyContent: "end" }}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ fontWeight: "600" }}
              >
                IWAS TECH
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* MAIN PART ///////////////////////////// */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "90vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{ width: "90%", minHeight: "80vh", display: "flex" }}
        >
          <Box sx={{ flex: "1", padding: "1rem", paddingLeft: "2rem" }}>
            <InputBox>
              <TextField
                id="outlined-basic"
                label="Book Name"
                variant="outlined"
                fullWidth
              />
            </InputBox>

            <InputBox>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChangeCategory}
                >
                  {categoryList.map((item) => (
                    <MenuItem key={item.id} value={item.category}>
                      {item.category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </InputBox>

            <InputBox>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Author</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={author}
                  label="Author"
                  onChange={handleChangeAuthor}
                >
                  {authorList.map((item) => (
                    <MenuItem key={item.id} value={item.author}>
                      {item.author}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </InputBox>

            <InputBox>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Publisher</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={publisher}
                  label="Publisher"
                  onChange={handleChangePublisher}
                >
                  {publisherList.map((item) => (
                    <MenuItem key={item.id} value={item.publisher}>
                      {item.publisher}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </InputBox>
            <Box>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  fontWeight: "600",
                  height: "3rem",
                  margin: "0 0.5rem 0.5rem 0",
                  marginTop: "1.5rem",
                }}
              >
                ADD BOOK
              </Button>
            </Box>
            <Divider />
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="New Publisher" value="1" />
                  <Tab label="New Category" value="2" />
                  <Tab label="New Author" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">New Publisher</TabPanel>
              <TabPanel value="2">New Category</TabPanel>
              <TabPanel value="3">New Author</TabPanel>
            </TabContext>
          </Box>
          <Divider orientation="vertical" flexItem variant="middle" />
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?w=1380&t=st=1670106068~exp=1670106668~hmac=068de5ece5921f2031c2d48bdd2ce84b8cb4935ed7b1461a458ec580290c0849"
              alt="book-picture"
              style={{
                height: "90%",
                width: "90%",
                borderRadius: "2rem",
                opacity: "0.8",
              }}
            />
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Create;
