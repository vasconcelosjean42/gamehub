import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box>
      <Navbar />
      <Box padding={5}>
        <Heading fontWeight={"bold"}>Oops</Heading>
        <Text color={"white"}>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Unxpected error"}
        </Text>
      </Box>
    </Box>
  );
};

export default ErrorPage;
