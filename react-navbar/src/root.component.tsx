import { AccountCircle } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
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
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import HomeHubLogo from '../assets/logos/logo-white.png';

export default function Root() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const menuItems = [
    { text: 'Visão Geral', icon: <HomeIcon />, onClick: () => setDrawerOpen(false) },
    { text: 'Dispositivos', icon: <LockIcon />, onClick: () => setDrawerOpen(false) },
    { text: 'Segurança', icon: <SecurityIcon />, onClick: () => setDrawerOpen(false) },
    { text: 'Configurações', icon: <SettingsIcon />, onClick: () => setDrawerOpen(false) },
  ];

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
      <MenuItem onClick={handleMenuClose}>
        <Stack>
          <Typography>Pedro Mello</Typography>
          <Typography variant="body2" sx={{ color: "var(--text-secondary, #00000099)" }}>pedro.mello@gmail.com</Typography>
        </Stack>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText>Configurações</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText>Perfil</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText>Sair</ListItemText>
      </MenuItem>
    </Menu>
  );

  const setDrawerOpen = (newOpen: boolean) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={ setDrawerOpen(false) }>
      <List>
        {
          menuItems.map((item) => (
            <ListItem key={ item.text } onClick={ item.onClick } disablePadding>
              <ListItemButton>
                <ListItemIcon>{ item.icon }</ListItemIcon>
                <ListItemText primary={ item.text } />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#9c27b0" }}>
        <Toolbar>
          <MenuItem
            tabIndex={0}
            onClick={ setDrawerOpen(true) }
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
      <Drawer open={ open } onClose={ setDrawerOpen(false) }>
        { DrawerList }
      </Drawer>
    </Box>
  );
}
