import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, 300);

  return (
    <Text>
      {isExpanded ? children : summary + "..."}
      <Button
        onClick={() => setExpanded((prevState) => !prevState)}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        ml={1}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
