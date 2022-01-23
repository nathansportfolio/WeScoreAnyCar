import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "../Drawer";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { MainContext } from "../../context/context";

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const { drawer, toggleDrawer, user } = React.useContext(MainContext);

  return (
    <>
      <Drawer />
      <Box>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                width: "100vw",
                textAlign: "center",
              }}
            >
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                WeScoreAnyCar.com{" "}
              </Link>
            </Typography>

            <Typography component="div" sx={{ flexGrow: 0, fontWeight: 200 }}>
              {user.name ? (
                user.name
              ) : (
                <Link href="/login">
                  <Button
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavigationBar;
