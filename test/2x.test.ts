import { Project } from '@almamedia-open-source/cdk-project-context';
import { Accounts } from '../src/configurations/accounts';
import { mock, dev, prod } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('2x', () => {
  test('mock', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.two({
        mock,
        dev,
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
      accounts: Accounts.two({
        mock,
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
      accounts: Accounts.two({
        mock,
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

  test('works without mock', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.two({
        dev,
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
      environments: ['preproduction', 'production'],
    });
  });
});
