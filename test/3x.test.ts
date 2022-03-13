import { Project } from '@almamedia-open-source/cdk-project-context';
import { Accounts } from '../src/configurations/accounts';
import { mock, dev, preprod, prod } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('3x', () => {
  test('mock', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.three({
        mock,
        dev,
        preprod,
        prod,
      }),
    });
    const account = Project.getAccount(project, 'mock');
    expect(account).toEqual({
      ...mock,
      environments: ['mock[0-9]'],
    });
  });

  test('dev', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.three({
        mock,
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
      accounts: Accounts.three({
        mock,
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
      accounts: Accounts.three({
        mock,
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

  test('works without mock', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.three({
        dev,
        preprod,
        prod,
      }),
    });
    const mockAcc = Project.getAccount(project, 'mock');
    expect(mockAcc).toEqual({
      ...mock,
      environments: ['mock[0-9]'],
    });
    const prodAcc = Project.getAccount(project, 'prod');
    expect(prodAcc).toEqual({
      ...prod,
      environments: ['production'],
    });
  });
});
