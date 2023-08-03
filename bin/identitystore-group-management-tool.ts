#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { IdentitystoreGroupManagementToolStack } from "../lib/identitystore-group-management-tool-stack";

const app = new cdk.App();
new IdentitystoreGroupManagementToolStack(
  app,
  "IdentitystoreGroupManagementToolStack",
  {
    // GFのIAM Identity CenterアカウントであるPayer-259アカウントを指定
    env: { account: "XXXXXXXXXXXX", region: "ap-northeast-1" },
    identityStoreId: "XXXXXXXXXXXX",
  }
);
