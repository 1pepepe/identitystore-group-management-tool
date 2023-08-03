#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { IdentitystoreGroupManagementToolStack } from "../lib/identitystore-group-management-tool-stack";

const app = new cdk.App();
new IdentitystoreGroupManagementToolStack(
  app,
  "IdentitystoreGroupManagementToolStack",
  {
    // IAM Identity Centerアカウントを指定
    env: { account: "XXXXXXXXXXXX", region: "ap-northeast-1" },
    // identityStoreIdはマネジメントコンソールで確認可能
    identityStoreId: "XXXXXXXXXXXX",
  }
);
