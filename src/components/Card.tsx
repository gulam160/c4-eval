import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Card = ({ user }: { user: any }) => {
  return (
    <Box
      key={user.id}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      maxWidth="400px"
      textAlign="center"
    >
      <Text
        border="1px solid black"
        padding={20}
        width="100px"
        margin="auto"
        borderRadius="50pc"
      >
        LI
      </Text>
      <Text fontWeight="bold" fontSize="25px">
        {user.name}
      </Text>
      <p style={{ fontSize: "18px" }}>{user.username}</p>
      <p style={{ fontSize: "18px" }}>{user.email}</p>
    </Box>
  );
};

export default Card;
