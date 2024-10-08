"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
  Grid2,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as MuiLink } from "@mui/material";

const AnchorTemporaryDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#284B7E",

          //   opacity: 0.9,
        }}
        // paddingLeft={{ xs: "15px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px", // Set the maximum width
            margin: "0 auto",
          }}
        >
          <Typography variant="caption">
            <Link href="/">
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Typography
                  //   variant="caption"
                  width={{
                    lg: 20,
                    md: 20,
                    sm: 15,
                    xs: 16,
                  }}
                >
                  <img style={{ width: "100%" }} src="/zzzlogo.png" alt="" />
                </Typography>
                <Typography
                  //   variant="caption"
                  fontSize={{
                    lg: 17,
                    md: 17,
                    sm: 15,
                    xs: 13,
                  }}
                >
                  ゼンレスゾーンゼロ 攻略サイト
                </Typography>
              </Box>
            </Link>
          </Typography>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List component="div">
          <ListItem onClick={toggleDrawer(false)}>
            <MuiLink
              component={Link}
              href="/training-calculator/agent"
              underline="none"
            >
              <ListItemText
                primary="エージェント育成計算機"
                primaryTypographyProps={{ fontSize: "0.75rem" }}
              />
            </MuiLink>
          </ListItem>

          <ListItem onClick={toggleDrawer(false)}>
            <MuiLink
              component={Link}
              href="/training-calculator/sound-engine"
              underline="none"
            >
              <ListItemText
                primary="音動機育成計算機"
                primaryTypographyProps={{ fontSize: "0.75rem" }}
              />
            </MuiLink>
          </ListItem>
          {/* /training-calculator/driver-disk */}
          <ListItem onClick={toggleDrawer(false)}>
            <MuiLink
              component={Link}
              href="/training-calculator/driver-disk"
              underline="none"
            >
              <ListItemText
                primary="ドライバディスク育成計算機"
                primaryTypographyProps={{ fontSize: "0.75rem" }}
              />
            </MuiLink>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default AnchorTemporaryDrawer;
