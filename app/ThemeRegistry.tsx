"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
  fontFamily: string;
};

export default function ThemeRegistry({ children, fontFamily }: Props) {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          background: {
            default: "#fafafa",
          },
        },
        typography: {
          fontFamily,
        },
      }),
    [fontFamily],
  );

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
