

```bash
npx create-next-app@latest
```

```
cd cd next14-sample
npm rub dev
```


Next14からのApp routerの注意点
layout.tsx

React18からのサーバーコンポーネント
- データフェッチ用（クライアントサイドで使用するHooksは使用できない　デフォルトがサーバーコンポーネント
- クライアントコンポーネントを使用する場合はファイルの先頭で`use client` 宣言する必要がある