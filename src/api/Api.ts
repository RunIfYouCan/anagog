import { applications } from './mocks/applications';

class MockApi {
  login(name: string, pass: string) {
    if (name === 'admin' && pass === 'admin') {
      return Promise.resolve({
        name,
        token: 'testToken',
      });
    }

    return Promise.reject('Invalid user');
  }

  logout() {
    return Promise.resolve();
  }

  getApps() {
    return Promise.resolve(applications.Apps);
  }

  deleteApp(appName: string) {
    return Promise.resolve();
  }

  createApplication(appName: string) {
    return Promise.resolve({
      AppName: appName,
      Versions: [{
        Version: '1',
        ActiveBuild: 1,
        LastBuild: 1,
        Builds: [],
      }],
    });
  }
}

const API = new MockApi();

export default API;
