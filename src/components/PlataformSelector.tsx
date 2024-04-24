import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlataforms from "../hooks/usePlataforms";

const PlataformSelector = () => {
  const { data, error } = usePlataforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Plataforms
      </MenuButton>
      <MenuList>
        {data.map((plataform) => (
          <MenuItem key={plataform.id}>{plataform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlataformSelector;
