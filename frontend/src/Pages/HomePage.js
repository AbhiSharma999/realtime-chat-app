import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Center,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="550px" centerContent>
      <Box
        d="flex"
        p={2}
        bg={"white"}
        w="100%"
        m="30px 0 10px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Center>
          <Text fontSize="4xl" fontFamily="Work sans" color="black">
            Talk-A-Tive
          </Text>
        </Center>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%"> Login </Tab>
            <Tab width="50%"> Sign Up </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
