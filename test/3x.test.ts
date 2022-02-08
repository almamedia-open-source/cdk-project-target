import { Project } from '@almamedia-open-source/cdk-project-context';
import { ProjectAccounts3x } from '../src/configurations/3x';
import { dev, preprod, prod } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('2x', () => {
  test('dev', () => {
    const project = new Project({
      ...defaultProject,
      accounts: new ProjectAccounts3x({
        dev,
        preprod,
        prod,
      }),
    });
    const account = Project.getAccount(project, 'dev');
    expect(account).toEqual({
      ...dev,
      environments: [
        'development',
        'feature/[/a-zA-z0-9-]+',
        'test',
        'staging',
      ],
    });
  });

  test('preprod', () => {
    const project = new Project({
      ...defaultProject,
      accounts: new ProjectAccounts3x({
        dev,
        preprod,
        prod,
      }),
    });
    const account = Project.getAccount(project, 'preprod');
    expect(account).toEqual({
      ...preprod,
      environments: ['qa[0-9]', 'preproduction'],
    });
  });

  test('prod', () => {
    const project = new Project({
      ...defaultProject,
      accounts: new ProjectAccounts3x({
        dev,
        preprod,
        prod,
      }),
    });
    const account = Project.getAccount(project, 'prod');
    expect(account).toEqual({
      ...prod,
      environments: ['production'],
    });
  });
});