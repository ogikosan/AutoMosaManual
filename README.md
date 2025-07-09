# AutoMosaRakku マニュアル

Discord認証付きのAutoMosaRakkuマニュアルサイト

## 設定

### 1. 環境変数の設定

`.env.example` を `.env` にコピーして設定してください。

```bash
cp .env.example .env
```

### 2. 必要な権限

以下のDiscordロールのいずれかが必要です：

- 運営メンバー (ID: 1290180982506389524)
- モザイク安心パック (ID: 1384073838140325979)
- 全部入りプレミアム (ID: 1384074109977362523)
- テスト会員 (ID: 1384651939572351056)

### 3. 開発環境での起動

```bash
npm install
npm run dev
```

### 4. Vercelデプロイ

```bash
# Vercel CLIのインストール
npm install -g vercel

# デプロイ
vercel --prod
```

## 環境変数（Vercel設定用）

- `DISCORD_CLIENT_ID`: Discord アプリケーションのクライアントID
- `DISCORD_CLIENT_SECRET`: Discord アプリケーションのクライアントシークレット
- `DISCORD_REDIRECT_URI`: リダイレクトURI（https://your-domain.vercel.app/api/auth/callback）
- `JWT_SECRET`: JWT署名用のシークレットキー

## ファイル構成

```
/
├── index.html              # メインマニュアル（既存）
├── auth/
│   ├── login.html         # ログイン画面
│   ├── success.html       # 認証成功画面
│   └── auth.js           # 認証チェック用スクリプト
├── api/
│   ├── auth/
│   │   ├── discord.js    # Discord OAuth2開始
│   │   ├── callback.js   # 認証コールバック
│   │   └── verify.js     # トークン検証
├── package.json
├── vercel.json
└── .env.example
```

## 認証フロー

1. `/` にアクセス
2. `auth.js` が自動的に認証チェック
3. 未認証の場合は `/auth/login.html` にリダイレクト
4. Discord認証を実行
5. 認証成功後は `/auth/success.html` を表示
6. 5秒後に自動的にマニュアルページに戻る