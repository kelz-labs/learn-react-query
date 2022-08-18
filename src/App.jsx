import { Container, Flex, Text, Grid, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Error from "./components/error";
import Loading from "./components/loading";

const App = () => {
  const getTopSong = async () => {
    const response = await fetch(
      "https://anitop.vercel.app/api/v1/male-character"
    );
    const data = await response.json();

    return data.data;
  };

  const { status, data } = useQuery(["song"], getTopSong);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;
  return (
    <Container maxW={"85%"}>
      <Flex justify={"center"} alignItems={"center"} flexDirection={"column"}>
        <Flex
          flexDir={"column"}
          justify={"center"}
          alignItems={"center"}
          border={"2px"}
        >
          <Grid
            mt={"4"}
            templateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            }}
            templateRows={"repeat(1, minmax(0, 1fr))"}
            gap={"6"}
          >
            {data.map((chara) => (
              <Flex flexDir={"column"}>
                <Image src={chara.imageUrl} />
                <Text>{chara.name}</Text>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Container>
  );
};

export default App;
