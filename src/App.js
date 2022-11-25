import {TextField, Container, Box, FormGroup, Button} from "@mui/material";
import WeatherAPI from "./WeatherAPI";
import {useState} from "react";
import './App.css';

const App = () => {
  const [query, setQuery] = useState();
  const [field, setField] = useState();

  const doSearch = () => {
    setQuery(field);
  };

  const doChange = (event) => {
    setField(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Box>
          <center>
            <h2>Weather App by Vinicius - 101314822</h2>
          </center>
        </Box>
        <Box>
          <FormGroup>
            <TextField label="Enter a city and click search" variant="outlined" onChange={doChange}/>
            <Button variant="contained" onClick={doSearch}>
              Search
            </Button>
          </FormGroup>
        </Box>
        <WeatherAPI query={query} />
      </Box>
    </Container>
  );
};

export default App;
