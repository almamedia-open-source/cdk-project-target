import { AccountType } from '@almamedia-open-source/cdk-project-context';
import { Stage } from 'aws-cdk-lib';
import { pascalCase } from 'change-case';
import { Construct } from 'constructs';
import { AccountContext } from '../context/account';

export interface AccountStageProps {
  readonly accountType: string;
  readonly region?: string;
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
      },
    });

    // Ensure no environment access from within Account Construct
    this.node.setContext('environment-type', undefined);
    this.node.setContext('environment', undefined);
    this.node.setContext('env', undefined);
  }
}


export class AccountConstruct extends Construct {

  constructor(scope: Construct) {

    const accountType = AccountContext.getAccountType(scope);
    const id = `${pascalCase(accountType)}Account`;

    super(scope, id);

    // Ensure no environment access from within Account Construct
    this.node.setContext('environment-type', undefined);
    this.node.setContext('environment', undefined);
    this.node.setContext('env', undefined);
  }
}


