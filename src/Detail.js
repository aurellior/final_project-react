// TODO: answer here

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (id) => {
    const response = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
    );
    const data = await response.json();
    setDetailData(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return detailData.map((data) => (
    <>
      <Button margin={3}>
        <Link to="/">Back</Link>
      </Button>
      <Box mx={60} my={10}>
        <Box display="flex" alignItems="top" my={5}>
          <Box>
            <Image src={data.card_images[0].image_url} />
          </Box>
          <Box mx={4}>
            <Heading>{data.name}</Heading>
            <Text>{`Level: ${data.level}`}</Text>
            <Text>{data.attribute}</Text>
            <Text>{`ATK/${data.atk} DEF/${data.def}`}</Text>
            <Text>{`[ ${data.type} / ${data.race} ]`}</Text>
            <Text>{data.desc}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="md" textAlign="center">
            Card Set
          </Heading>
          <SimpleGrid columns={6}>
            {data.card_sets.map((cardData) => (
              <Box borderWidth={1} borderRadius="lg" marginX={1} padding={2}>
                <Text>{`Name: ${cardData.set_name}`}</Text>
                <Text>{`Code: ${cardData.set_code}`}</Text>
                <Text>{`Rarity: ${cardData.set_rarity}`}</Text>
                <Text>{`Price: ${cardData.set_price}`}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  ));
  // );
}

export default Detail;
