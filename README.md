# Lesson msw

## Description

```sh
npx msw init public/
```

で`public/mockServiceWorker.js`を作成する。

handler を定義して `_app.tsx`で`worker.start()`を実行する。
（`src/mocks/`参考）

localhost:3000 で確認する。

### Storybook

アドオンをインストールする。

```sh
yarn add -D msw-storybook-addon
```

`src/.storybook/preview.js`に設定を追加する。

Storybook の定義ファイルで parameter を設定する。

localhost:6006 で確認する。
