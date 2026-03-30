"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { APP_BAR_HEIGHT_PX, DRAWER_WIDTH_PX, TOC_WIDTH_PX } from "./constants";
import DocAppBar from "./DocAppBar";
import DocSidebar, { sidebarDrawerPaperSx } from "./DocSidebar";
import DocToc from "./DocToc";

export default function DocLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isMdUp) setMobileOpen(false);
  }, [isMdUp]);

  const drawerPaperBelowAppBar = {
    ...sidebarDrawerPaperSx(),
    top: APP_BAR_HEIGHT_PX,
    height: `calc(100vh - ${APP_BAR_HEIGHT_PX}px)`,
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <DocAppBar onMenuClick={handleDrawerToggle} />
      {/* 固定 AppBar 分の余白（MUI ドキュと同様・全幅ヘッダーの下からサイドバー） */}
      <Toolbar sx={{ minHeight: `${APP_BAR_HEIGHT_PX}px`, flexShrink: 0 }} />

      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          width: "100%",
        }}
      >
        <Box component="nav" sx={{ width: { md: DRAWER_WIDTH_PX }, flexShrink: { md: 0 } }} aria-label="サイト">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": drawerPaperBelowAppBar,
            }}
          >
            <DocSidebar />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": drawerPaperBelowAppBar,
            }}
          >
            <DocSidebar />
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minWidth: 0,
            bgcolor: "background.default",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "flex-start",
              width: "100%",
              maxWidth: "100%",
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 2, md: 3 },
                maxWidth: 900,
              }}
            >
              {children}
            </Box>
            <Box
              component="aside"
              sx={{
                display: { xs: "none", lg: "block" },
                width: TOC_WIDTH_PX,
                flexShrink: 0,
                position: "sticky",
                top: APP_BAR_HEIGHT_PX,
                alignSelf: "flex-start",
                py: 3,
                pr: 3,
                pl: 1,
                borderLeft: 1,
                borderColor: "divider",
                maxHeight: `calc(100vh - ${APP_BAR_HEIGHT_PX}px)`,
                overflow: "auto",
              }}
            >
              <DocToc />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
