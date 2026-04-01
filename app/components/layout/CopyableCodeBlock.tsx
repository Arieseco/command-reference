"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  code: string;
  language?: string;
};

function CopyIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export default function CopyableCodeBlock({ code, language }: Props) {
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
        m: 0,
        p: 1.5,
        my: 2,
        border: 1,
        borderColor: "divider",
        borderRadius: 1.5,
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 0.75 }}>
        <Tooltip title={copied ? "Copied" : "Copy code"}>
          <IconButton size="small" onClick={handleCopy} aria-label="Copy code" color={copied ? "primary" : "default"}>
            <CopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        sx={{
          m: 0,
          overflowX: "auto",
          borderRadius: 1,
          "& pre": { m: "0 !important", background: "transparent !important" },
        }}
      >
        <SyntaxHighlighter
          language={language || "bash"}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.92rem",
            lineHeight: 1.7,
          }}
          codeTagProps={{
            style: { fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" },
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}

