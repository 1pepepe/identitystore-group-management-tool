import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as identitystore from "aws-cdk-lib/aws-identitystore";

import { users } from "./users";
import { groups } from "./groups";

interface IdentitystoreGroupManagementToolProps extends cdk.StackProps {
  identityStoreId: string;
}

export class IdentitystoreGroupManagementToolStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: IdentitystoreGroupManagementToolProps
  ) {
    super(scope, id, props);

    groups.forEach((group) => {
      const specificGroup = new identitystore.CfnGroup(
        this,
        group.displayName,
        {
          description: group.description,
          displayName: group.displayName,
          identityStoreId: props.identityStoreId,
        }
      );

      group.members.forEach((member) => {
        new identitystore.CfnGroupMembership(
          this,
          `${group.displayName}-${member}`,
          {
            groupId: specificGroup.attrGroupId,
            identityStoreId: props.identityStoreId,
            memberId: {
              userId: users.find((user) => user.userName === member)!.userId,
            },
          }
        );
      });
    });
  }
}
