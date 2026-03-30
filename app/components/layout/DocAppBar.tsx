"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { APP_BAR_HEIGHT_PX } from "./constants";
import { IconMenu, IconSearch } from "./icons";

type Props = {
  onMenuClick: () => void;
};

export default function DocAppBar({ onMenuClick }: Props) {
  const router = useRouter();

  const goSearch = React.useCallback(() => {
    router.push("/search");
  }, [router]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        router.push("/search");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: APP_BAR_HEIGHT_PX,
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
        left: 0,
        right: 0,
        width: "100%",
        zIndex: (t) => t.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          minHeight: APP_BAR_HEIGHT_PX,
          px: { xs: 1, sm: 2 },
          gap: 1.5,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="ナビを開く"
          edge="start"
          onClick={onMenuClick}
          sx={{ display: { md: "none" } }}
        >
          <IconMenu />
        </IconButton>

        <Box
          component="a"
          href="/"
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "inherit",
            flexShrink: 0,
          }}
        >
          <Box
            aria-hidden
            sx={{
              width: 28,
              height: 28,
              borderRadius: 1,
              bgcolor: "grey.900",
              color: "success.light",
              fontFamily: "ui-monospace, monospace",
              fontSize: 14,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {">"}
          </Box>
          <Typography variant="subtitle2" fontWeight={700} noWrap component="span">
            Command Prompt Reference
          </Typography>
        </Box>

        <Typography
          variant="subtitle2"
          fontWeight={700}
          noWrap
          sx={{ display: { xs: "block", sm: "none" }, flex: 1, minWidth: 0 }}
        >
          CPR
        </Typography>

        <TextField
          size="small"
          placeholder="検索…"
          onClick={goSearch}
          inputProps={{ readOnly: true, "aria-label": "検索へ" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconSearch sx={{ opacity: 0.7, fontSize: 20 }} />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            maxWidth: { sm: 420 },
            ml: { sm: "auto" },
            "& .MuiOutlinedInput-root": { bgcolor: "action.hover", cursor: "pointer" },
          }}
        />

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: { xs: "none", md: "block" }, flexShrink: 0, userSelect: "none" }}
        >
          Ctrl+K
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
