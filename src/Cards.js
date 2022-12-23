import { Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return card.map((cardData) => (
    <Link to={`card/${cardData.id}`}>
      <Box className="yugioh-card">
        <Image src={cardData.card_images[0].image_url} />
        <Heading textAlign="center" as="h2" size="md" m={2}>
          {cardData.name}
        </Heading>
      </Box>
    </Link>
  )); // TODO: replace this
}

export default Card;
