import { Box, Center, Heading } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home";
import Cards from "./Cards";
import Detail from "./Detail";
import Card from "./Cards";

const App = () => {
  const MyRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="card/:id" element={<Detail />} />
      <Route path="*" element={<p>404 Page not found!</p>} />
    </Routes>
  );

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
