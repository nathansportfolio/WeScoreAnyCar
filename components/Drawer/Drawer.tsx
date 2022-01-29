import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import Link from "@mui/material/Link";
import AssignmentIcon from "@mui/icons-material/Assignment";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import { MainContext } from "../../context/context";

const myComponents: LooseObject = {
  "Get A Score": { icon: Home, path: "/" },
  "Sign in": { icon: Login, path: "/login" },
  Register: { icon: AssignmentIcon, path: "/register" },
  "My Account": { icon: ManageAccounts, path: "/account" },
  Favourites: { icon: AssignmentIcon, path: "/favourites" },
  Logout: { icon: Logout, path: "/" },
};

interface LooseObject {
  [key: string]: any;
}

interface DrawerComponentProps {}

const DrawerComponent: React.FC<DrawerComponentProps> = () => {
  const { drawer, toggleDrawer, user } = React.useContext(MainContext);

  const dynamicIcons = (text: string) => {
    const Icon = myComponents[text]["icon"];
    const Path = myComponents[text]["path"];
    let logout = false;
    if (text === "Logout") logout = true;
    return (
      <Link
        key={text}
        href={Path}
        // onClick={() => (logout ? props.logout() : "")}
        style={{ textDecoration: "none", color: "white" }}
      >
        <ListItem button key={text}>
          <ListItemIcon>
            <Icon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Link>
    );
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}
    >
      <List>{["Get A Score"].map((text) => dynamicIcons(text))}</List>
      <Divider />
      <List>
        {user.ss ? (
          <>
            {["My Account", "Favourites", "Logout"].map((text) =>
              dynamicIcons(text)
            )}
          </>
        ) : (
          <>{["Sign in", "Register"].map((text) => dynamicIcons(text))}</>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"left"} open={drawer} onClose={() => toggleDrawer()}>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{
            width: "20px",
            marginLeft: "23px",
            marginTop: "10px",
            color: "white",
          }}
          onClick={() => toggleDrawer()}
        >
          <Close />
        </IconButton>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
