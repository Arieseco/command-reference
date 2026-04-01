"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { alpha } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DRAWER_WIDTH_PX } from "./constants";
import { IconExpandMore } from "./icons";
import { BATCH_NAV_ITEMS, COMMAND_NAV_ITEMS, isNavPathActive } from "./nav-config";

function SidebarNav() {
  const pathname = usePathname();
  const [commandsOpen, setCommandsOpen] = React.useState(true);
  const [batchOpen, setBatchOpen] = React.useState(true);

  React.useEffect(() => {
    if (pathname.startsWith("/commands/")) {
      setCommandsOpen(true);
    }
    if (pathname.startsWith("/batch/")) {
      setBatchOpen(true);
    }
  }, [pathname]);

  return (
    <Box sx={{ overflow: "auto", pb: 2, height: "100%" }}>
      <List dense disablePadding component="ul" sx={{ px: 0.5, pt: 1, listStyle: "none" }}>
        <Box component="li" sx={{ display: "block", listStyle: "none", p: 0, m: 0 }}>
                <ListItemButton
                  dense
                  onClick={() => setCommandsOpen((prev) => !prev)}
            sx={{ borderRadius: 1, py: 0.75, px: 1.5 }}
                >
                  <ListItemText
                    primary="コマンド"
                    slotProps={{
                      primary: {
                        variant: "body2",
                        fontWeight: 700,
                        letterSpacing: 0.02,
                      },
                    }}
                  />
                  <IconExpandMore
                    sx={{
                      fontSize: 20,
                      transition: (t) => t.transitions.create("transform"),
                      transform: commandsOpen ? "rotate(0deg)" : "rotate(-90deg)",
                      opacity: 0.7,
                    }}
                  />
                </ListItemButton>
                <Collapse in={commandsOpen} timeout="auto" unmountOnExit={false}>
                  <List component="ul" dense disablePadding sx={{ pl: 0.5, listStyle: "none" }}>
                    <ListItem disablePadding sx={{ display: "list-item" }}>
                      <ListItemButton
                        component={Link}
                        href="/reverse"
                        selected={isNavPathActive("/reverse", pathname)}
                        sx={{
                          pl: 2,
                          py: 0.7,
                          borderRadius: 1,
                          borderLeft: "3px solid transparent",
                          "&.Mui-selected": {
                            borderLeftColor: "primary.main",
                            bgcolor: (t) => alpha(t.palette.primary.main, 0.09),
                            color: "primary.main",
                            "&:hover": {
                              bgcolor: (t) => alpha(t.palette.primary.main, 0.14),
                            },
                          },
                        }}
                      >
                        <ListItemText
                          primary="逆引き検索ページ"
                          slotProps={{
                            primary: {
                              variant: "body2",
                              fontWeight: isNavPathActive("/reverse", pathname) ? 600 : 400,
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                    {COMMAND_NAV_ITEMS.map((item) => {
                      const selected = isNavPathActive(item.href, pathname);
                      return (
                        <ListItem key={item.slug} disablePadding sx={{ display: "list-item" }}>
                          <ListItemButton
                            component={Link}
                            href={item.href}
                            selected={selected}
                            sx={{
                              pl: 2,
                              py: 0.7,
                              borderRadius: 1,
                              borderLeft: "3px solid transparent",
                              "&.Mui-selected": {
                                borderLeftColor: "primary.main",
                                bgcolor: (t) => alpha(t.palette.primary.main, 0.09),
                                color: "primary.main",
                                "&:hover": {
                                  bgcolor: (t) => alpha(t.palette.primary.main, 0.14),
                                },
                              },
                            }}
                          >
                            <ListItemText
                              primary={item.label}
                              slotProps={{
                                primary: {
                                  variant: "body2",
                                  fontWeight: selected ? 600 : 400,
                                  fontFamily: "ui-monospace, monospace",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>

                <ListItemButton
                  dense
                  onClick={() => setBatchOpen((prev) => !prev)}
                  sx={{ borderRadius: 1, mt: 0.75, py: 0.75, px: 1.5 }}
                >
                  <ListItemText
                    primary="バッチ"
                    slotProps={{
                      primary: {
                        variant: "body2",
                        fontWeight: 700,
                        letterSpacing: 0.02,
                      },
                    }}
                  />
                  <IconExpandMore
                    sx={{
                      fontSize: 20,
                      transition: (t) => t.transitions.create("transform"),
                      transform: batchOpen ? "rotate(0deg)" : "rotate(-90deg)",
                      opacity: 0.7,
                    }}
                  />
                </ListItemButton>
                <Collapse in={batchOpen} timeout="auto" unmountOnExit={false}>
                  <List component="ul" dense disablePadding sx={{ pl: 0.5, listStyle: "none" }}>
                    <ListItem disablePadding sx={{ display: "list-item" }}>
                      <ListItemButton
                        component={Link}
                        href="/batch"
                        selected={isNavPathActive("/batch", pathname)}
                        sx={{
                          pl: 2,
                          py: 0.7,
                          borderRadius: 1,
                          borderLeft: "3px solid transparent",
                          "&.Mui-selected": {
                            borderLeftColor: "primary.main",
                            bgcolor: (t) => alpha(t.palette.primary.main, 0.09),
                            color: "primary.main",
                            "&:hover": {
                              bgcolor: (t) => alpha(t.palette.primary.main, 0.14),
                            },
                          },
                        }}
                      >
                        <ListItemText
                          primary="バッチ一覧"
                          slotProps={{
                            primary: {
                              variant: "body2",
                              fontWeight: isNavPathActive("/batch", pathname) ? 600 : 400,
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                    {BATCH_NAV_ITEMS.map((item) => {
                      const selected = isNavPathActive(item.href, pathname);
                      return (
                        <ListItem key={item.slug} disablePadding sx={{ display: "list-item" }}>
                          <ListItemButton
                            component={Link}
                            href={item.href}
                            selected={selected}
                            sx={{
                              pl: 2,
                              py: 0.7,
                              borderRadius: 1,
                              borderLeft: "3px solid transparent",
                              "&.Mui-selected": {
                                borderLeftColor: "primary.main",
                                bgcolor: (t) => alpha(t.palette.primary.main, 0.09),
                                color: "primary.main",
                                "&:hover": {
                                  bgcolor: (t) => alpha(t.palette.primary.main, 0.14),
                                },
                              },
                            }}
                          >
                            <ListItemText
                              primary={item.label}
                              slotProps={{
                                primary: {
                                  variant: "body2",
                                  fontWeight: selected ? 600 : 400,
                                  fontFamily: "ui-monospace, monospace",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
        </Box>
      </List>
    </Box>
  );
}

export function sidebarDrawerPaperSx() {
  return {
    boxSizing: "border-box" as const,
    width: DRAWER_WIDTH_PX,
    borderRight: 1,
    borderColor: "divider",
    bgcolor: "background.paper",
  };
}

export default function DocSidebar() {
  return <SidebarNav />;
}
