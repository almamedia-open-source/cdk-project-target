import { EnvironmentLabel } from './environments';

export enum AccountType {
  MOCK='mock',
  SHARED='shared',
  DEV='dev',
  PREPROD='preprod',
  PROD='prod',
}

export interface Account {
  readonly id: string;
  readonly config?: Record<string, any>;
}

export interface AccountWithEnvironments extends Account {
  readonly environments: EnvironmentLabel[];
}

export interface ProjectAccounts {
  readonly mock?: AccountWithEnvironments;
  readonly shared?: AccountWithEnvironments;
  readonly dev?: AccountWithEnvironments;
  readonly preprod?: AccountWithEnvironments;
  readonly prod?: AccountWithEnvironments;
}
