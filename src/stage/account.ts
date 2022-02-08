import { Stage } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { pascalCase } from 'change-case';
import { AccountContext } from '../context/account';
import { AccountType } from '@almamedia-open-source/cdk-project-context';

export interface AccountStageProps {
  accountType: string;
  region?: string;
}

export class AccountStage extends Stage {

  constructor(scope: Construct, props?: AccountStageProps) {

    // Set account type context explicitly if provided via prop instead of CLI context
    if (props?.accountType) {
      AccountType.set(scope, props.accountType);
    }

    const accountType = AccountContext.getAccountType(scope);
    const accountId = AccountContext.getAccountId(scope);

    const id = `${pascalCase(accountType)}Account`;

    super(scope, id, {
      env: {
        account: accountId,
        region: props?.region,
      }
    });

    // Ensure no environment access from within Account Construct
    this.node.setContext('environment-type', undefined);
    this.node.setContext('environment', undefined);
    this.node.setContext('env', undefined);
  }
}



