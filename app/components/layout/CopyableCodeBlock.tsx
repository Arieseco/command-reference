"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

type Props = {
  code: string;
};

export default function CopyableCodeBlock({ code }: Props) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // フォールバック: execCommand などは面倒なので、失敗時は無視する
    }
  }, [code]);

  return (
    <Box
      sx={{
        position: "relative",
        m: 0,
        p: 2,
        my: 2,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5,
        bgcolor: "background.paper",
      }}
    >
      <Button
        size="small"
        variant="text"
        onClick={handleCopy}
        sx={{ position: "absolute", top: 6, right: 6, minWidth: "auto", px: 1 }}
      >
        {copied ? "Copied" : "Copy"}
      </Button>

      <Box
        component="pre"
        sx={{
          m: 0,
          whiteSpace: "pre-wrap",
          lineHeight: 1.7,
          fontSize: "0.95rem",
          overflowX: "auto",
        }}
      >
        <Box
          component="code"
          sx={{
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          }}
        >
          {code}
        </Box>
      </Box>
    </Box>
  );
}

