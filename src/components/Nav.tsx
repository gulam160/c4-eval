import { Flex, Text, Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { MoonIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="#83bcff"
      color="black"
    >
      <Flex justifyContent="flex-start">
        <NextLink href="/" passHref>
          <Link>
            <Icon
              as={AiFillHome}
              boxSize="1.5rem"
              marginRight="10"
              cursor="pointer"
            />
          </Link>
        </NextLink>
        <NextLink href="/people" passHref>
          <Link>People</Link>
        </NextLink>
      </Flex>
      <Flex align="center">
        <MoonIcon boxSize={5} cursor="pointer" />
      </Flex>
    </Flex>
  );
};
