import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { BATCH_ARTICLES } from "@/lib/batch-pages";

export default function BatchPage() {
  return (
    <Box component="article">
      <Typography id="batch" variant="h4" component="h1" fontWeight={700} sx={{ mb: 1 }}>
        ?????
      </Typography>
      <Typography id="batch-status" variant="body1" color="text.secondary">
        ??????????????????????
      </Typography>
      <Box component="ul" sx={{ pl: 2.5, my: 2 }}>
        {BATCH_ARTICLES.map((item) => (
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
