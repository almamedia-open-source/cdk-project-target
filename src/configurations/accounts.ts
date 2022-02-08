import { Account } from '@almamedia-open-source/cdk-project-context';

export enum AccountType {
  MOCK='mock',
  SHARED='shared',
  DEV='dev',
  PREPROD='preprod',
  PROD='prod',
}

export interface AccountConfiguration {
  readonly id: string;
  readonly config?: Record<string, any>;
}

export interface ProjectAccounts {
  readonly mock?: Account;
  readonly shared?: Account;
  readonly dev?: Account;
  readonly preprod?: Account;
  readonly prod?: Account;
}
