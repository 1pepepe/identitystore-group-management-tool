# IAM Identity Center のグループ管理

## 概要

IAM Identity Center で Google Workspace を IdP とした際に、SCIM でグループの同期ができない（2023/08/03 時点）ので、グループとグループに所属するユーザーを管理するためのアプリケーションが必要です。

ユーザーとグループのマスターデータを管理し AWS CDK でデプロイ可能なプログラムです。

## 使い方

ユーザーとグループを追加する方法はそれぞれ下記に記載しています。

```shell
$ cdk deploy
```

でデプロイ可能です。

## グループを追加する方法

groups.ts の groups にグループを追加します。members には所属させたいユーザーの userName を入力します。

## ユーザーを追加する方法

users.ts の users にユーザーを追加します。userId は IAM Identity Center 画面から確認ができます。
