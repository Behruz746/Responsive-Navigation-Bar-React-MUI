import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Products", path: "#" },
  { name: "Services", path: "#" },
  { name: "Contact US", path: "#" },
  { name: "About US", path: "#" },
  { name: "Login", path: "#" },
  { name: "Logout", path: "#" },
];

function Drower() {
  const [openDrow, setOpenDrow] = useState(false);

  return (
    <>
      <Drawer open={openDrow} onClose={() => setOpenDrow(false)}>
        <List sx={{ padding: "0 20px" }}>
          {pages.map((page, idx) => (
            <ListItemButton key={idx} onClick={() => setOpenDrow(false)}>
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#fff", marginLeft: "auto" }}
        onClick={() => setOpenDrow((prev) => !prev)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </>
  );
}

export default Drower;
