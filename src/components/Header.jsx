import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drower from "./Drower";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function Header() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const pages = [
    { name: "Products", path: "#" },
    { name: "Services", path: "#" },
    { name: "Contact US", path: "#" },
    { name: "About US", path: "#" },
  ];

  // agar screen "md" ga teng bo'lsa yoli kam bo'lsa true unday bo'lmasa false)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar sx={{ backgroundColor: "#063970" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                ShOPPEE
              </Typography>
              <Drower />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                indicatorColor="secondary"
                onChange={(_, index) => {
                  setValue(index);
                }}
              >
                {pages.map((page, idx) => (
                  <Tab label={page.name} key={idx} />
                ))}
              </Tabs>

              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
