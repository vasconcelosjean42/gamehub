import { Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode | ReactNode[];
}

const Attribute = ({ text, children }: Props) => {
  return (
    <Box>
      <Text color={"gray"} fontWeight={"bold"}>
        {text}
      </Text>
      {children}
    </Box>
  );
};

export default Attribute;
