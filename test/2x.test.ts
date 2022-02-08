import { Project } from '@almamedia-open-source/cdk-project-context';
import { ProjectAccounts2x } from '../src/configurations/2x';
import { dev, prod } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('2x', () => {
  test('dev', () => {
    const project = new Project({
      ...defaultProject,
      accounts: new ProjectAccounts2x({
        dev,
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
        'qa[0-9]',
        'staging',
      ],
    });
  });

  test('prod', () => {
    const project = new Project({
      ...defaultProject,
      accounts: new ProjectAccounts2x({
        dev,
        prod,
      }),
    });
    const account = Project.getAccount(project, 'prod');
    expect(account).toEqual({
      ...prod,
      environments: ['preproduction', 'production'],
    });
  });
});
