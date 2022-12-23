import { useEffect, useState } from "react";
import { SimpleGrid, Select, Box } from "@chakra-ui/react";
import Card from "./Cards";

function Home() {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      .then((response) => response.json())
      .then((json) => {
        setCard(json.data);
        setLoading(false);
      });
  }, []);

  function sortData(type) {
    if (type === "name") {
      setCard(
        [...card].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name === b.name) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    } else if (type === "attack") {
      setCard([...card].sort((a, b) => a.atk - b.atk));
    } else if (type === "defence") {
      setCard([...card].sort((a, b) => a.def - b.def));
    }
  }

  const handleChange = (event) => {
    sortData(event.target.value);
  };

  return (
    <Box marginX={80} marginY={5}>
      <Select
        marginX="auto"
        width={700}
        marginY={5}
        onChange={handleChange}
        name="sort"
        placeholder="Sort by"
      >
        <option value="name">Name</option>
        <option value="attack">Attack</option>
        <option value="defence">Defence</option>
      </Select>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <SimpleGrid columns={4} spacingX={5} spacingY={50}>
          <Card card={card} />
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Home;
