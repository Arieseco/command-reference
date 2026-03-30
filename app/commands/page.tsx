import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { COMMAND_ARTICLES } from "@/lib/command-pages";

export default function CommandsPage() {
  return (
    <Box component="article">
      <Typography id="commands-index" variant="h4" component="h1" fontWeight={700} sx={{ mb: 1 }}>
        コマンド一覧
      </Typography>
      <Typography id="commands-description" variant="body1" color="text.secondary" sx={{ mb: 2.5 }}>
        コマンド名を選択すると、各記事ページへ移動します。
      </Typography>

      <Box component="ul" sx={{ pl: 2.5, my: 0 }}>
        {COMMAND_ARTICLES.map((item) => (
          <Box component="li" key={item.slug} sx={{ py: 0.5 }}>
            <Link href={item.href} underline="hover" sx={{ fontFamily: "ui-monospace, monospace" }}>
              {item.title}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
