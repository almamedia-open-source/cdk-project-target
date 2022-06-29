import { pascalCase } from 'change-case';
import { Construct } from 'constructs';
import { AccountContext } from '../context/account';

export class AccountConstruct extends Construct {

  constructor(scope: Construct) {

    const accountType = AccountContext.getAccountType(scope);

    const id = `${pascalCase(accountType)}Account`;

    super(scope, id);

    // Ensure no environment access from within Account Construct
    this.node.setContext('environment-type', '');
    this.node.setContext('environment', '');
    this.node.setContext('env', '');
  }
}


