import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // バックエンドのGraphQLサーバーがスキーマのエンドポイントを持っているので、そのURLを指定
  schema: "http://localhost:4000/graphql",
  // クエリやミューテーションを使用しているファイルのパスを指定
  documents: "./**/*.{ts,tsx}",

  // 型定義ファイルなどがこのディレクトリに出力される
  // キーには、生成されるファイルのパスを指定
  generates: {
    "gql/": {
      // このプリセットを指定するだけで個別のGraphQLクライアント向けプラグイン（typescript-react-apolloなど）が不要になる
      // 詳細はこちら（https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#installation　に書いてあるようなフロントエンドのライブラリの内容に対応する
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
