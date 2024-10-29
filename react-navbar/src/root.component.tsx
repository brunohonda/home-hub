import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import WifiIcon from "@mui/icons-material/Wifi";
import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import HomeHubLogo from '../assets/logos/logo-white.png';

export default function Root() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Usuário</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Configurações</MenuItem>
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </Menu>
  );

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={'Visão geral'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SpaceDashboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Visão geral'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Dispositivos'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary={'Dispositivos'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Segurança'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary={'Segurança'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={'Configurações'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Configurações'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#9c27b0" }}>
        <Toolbar>
          <MenuItem
            onClick={ toggleDrawer(true) }
          >
            <img src={ HomeHubLogo } style={{ width: '176px' }} />
          </MenuItem>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      { renderMenu }
      <Drawer open={ open } onClose={ toggleDrawer(false) }>
        { DrawerList }
      </Drawer>
    </Box>
  );
}
