import Card from "@/components/Card";
import { Navbar } from "@/components/Nav";
import { User } from "@/utils/types";
import { Heading, Box } from "@chakra-ui/react";
import { fetchUsers } from "../utils/api";

interface UsersPageProps {
  users: User[];
}
export async function getStaticProps() {
  const users = await fetchUsers(10);
  return {
    props: {
      users,
    },
  };
}

const People = ({ users }: UsersPageProps) => {
  return (
    <>
      <Navbar />
      <Box
        mt={4}
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridRowGap={5}
        gridColumnGap={5}
      >
        {users.map((el, ind) => {
          return <Card key={el.id} user={el} />;
        })}
      </Box>
    </>
  );
};

export default People;
