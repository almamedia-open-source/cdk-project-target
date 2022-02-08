import { Stage } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { pascalCase } from 'change-case';
import { EnvironmentContext } from '../context/environment';
import { EnvironmentType } from '@almamedia-open-source/cdk-project-context';
import { AccountType } from '@almamedia-open-source/cdk-project-context';
import { Project } from '@almamedia-open-source/cdk-project-context';

export interface EnvironmentStageProps {
  environmentType: string;
  region?: string;
}

export class EnvironmentStage extends Stage {
  constructor(scope: Construct, props?: EnvironmentStageProps) {
    const type = EnvironmentContext.getName(scope);
    const id = `${pascalCase(type)}Environment`;

    // Set environment type context explicitly if provided via prop instead of CLI context
    if (props?.environmentType) {
      const projectConfiguration = Project.getConfiguration(scope);
      const accountType = AccountType.matchFromEnvironment(scope, projectConfiguration.accounts, props.environmentType);
      AccountType.set(scope, accountType);
      EnvironmentType.set(scope, props.environmentType)
    }

    super(scope, id, { env: { region: props?.region } });
  }
}



