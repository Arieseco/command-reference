import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box component="article">
      <Typography
        id="overview"
        variant="h4"
        component="h1"
        fontWeight={600}
        gutterBottom
        sx={{ scrollMarginTop: 88 }}
      >
        Command Prompt Reference
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
        Astro 版は廃止し、Next.js（App Router）＋ React ＋ TypeScript ＋ MUI
        で再構築中です。記事 Markdown はリポジトリ直下の{" "}
        <Box
          component="code"
          sx={{
            px: 0.75,
            py: 0.25,
            borderRadius: 1,
            bgcolor: "action.hover",
            fontFamily: "ui-monospace, monospace",
            fontSize: "0.875rem",
          }}
        >
          content/
        </Box>{" "}
        に退避してあります。
      </Typography>

      <Typography
        id="status"
        component="h2"
        variant="h6"
        fontWeight={600}
        sx={{ mt: 4, mb: 1.5, scrollMarginTop: 88 }}
      >
        再構築の状況
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
        コンテンツの MDX 化・ルーティングはこれからです。レイアウトは{" "}
        <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
          Material UI ドキュメント
        </Box>{" "}
        の配置を参考にしています。
      </Typography>
    </Box>
  );
}

