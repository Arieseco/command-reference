import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BATCH_ARTICLES } from "@/lib/batch-pages";

const BATCH_SUMMARY: Record<string, string> = {
  arguments: "バッチ引数 `%1` から `%*`、`shift` の基本と実用パターンを確認する。",
  variables: "変数の基本。%VAR% 展開、代入、参照の前提を押さえる。",
  "delayed-expansion": "ループや分岐内で値が更新されない問題を !VAR! で解決する。",
  "exit-codes": "`exit /b` と `errorlevel` を使って成功/失敗を呼び出し元へ返す。",
  if: "errorlevel、存在判定、文字列比較の条件分岐を整理する。",
  for: "繰り返し処理の基礎から for /f の実戦パターンまで扱う。",
  "goto-call-label": "`goto` と `call :label` で処理を分割し、再利用しやすくする。",
  "pipe-escape": "パイプでコマンドを連結し、`^` で特殊文字を安全に扱う。",
  redirection: "標準出力/標準エラーの向き先を制御してログ運用を安定化する。",
  "string-operations": "置換と部分文字列抽出で文字列を加工する。",
};

export default function BatchPage() {
  return (
    <Box component="article">
      <Typography id="batch-overview" variant="h4" component="h1" fontWeight={700} sx={{ mb: 1 }}>
        バッチ文法ガイド
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Windows のバッチファイル作成でよく使う構文を、短い例と注意点つきでまとめています。
      </Typography>

      <Typography id="batch-learning-path" variant="h6" component="h2" fontWeight={700} sx={{ mt: 4, mb: 1.5 }}>
        学習順のおすすめ
      </Typography>
      <Box component="ol" sx={{ pl: 2.5, my: 0 }}>
        <Box component="li" sx={{ mb: 0.75 }}>
          <Link href="/batch/variables" underline="hover">
            variables
          </Link>
        </Box>
        <Box component="li" sx={{ mb: 0.75 }}>
          <Link href="/batch/if" underline="hover">
            if
          </Link>
        </Box>
        <Box component="li" sx={{ mb: 0.75 }}>
          <Link href="/batch/for" underline="hover">
            for
          </Link>
        </Box>
        <Box component="li" sx={{ mb: 0.75 }}>
          <Link href="/batch/delayed-expansion" underline="hover">
            delayed-expansion
          </Link>
        </Box>
      </Box>

      <Typography id="batch-articles" variant="h6" component="h2" fontWeight={700} sx={{ mt: 4, mb: 1.5 }}>
        記事一覧
      </Typography>
      <Stack spacing={1.25}>
        {BATCH_ARTICLES.map((item) => (
          <Card key={item.slug} variant="outlined">
            <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
              <Link href={item.href} underline="hover" sx={{ fontFamily: "ui-monospace, monospace", fontWeight: 700 }}>
                {item.title}
              </Link>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {BATCH_SUMMARY[item.slug] ?? "バッチ構文の基本と実用例を解説。"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Typography id="batch-tips" variant="h6" component="h2" fontWeight={700} sx={{ mt: 4, mb: 1.5 }}>
        使い始めるときのコツ
      </Typography>
      <Box
        sx={{
          p: 2,
          border: 1,
          borderColor: "divider",
          borderRadius: 1.5,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          まずは小さな `.bat` を作って `echo on` のまま挙動を確認すると、展開タイミングや分岐の癖をつかみやすいです。
          ループ内で値が変わらない場合は `delayed-expansion` を確認してください。
        </Typography>
      </Box>
    </Box>
  );
}
