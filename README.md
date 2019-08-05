This project is a prove of concept to simplify the way to do unit test for redux saga


Testing a saga:
```js
import { runSaga, withBackendSuccess } from './sagaUtils';
import { fetchReposAsync } from './repositories';
import { fetchRepos as fetchReposApi } from '../apis/repositories';
import {
  FETCH_REPOS_STARTED,
  FETCH_REPOS_FINISHED,
  fetchRepos as fetchReposAction,
  setRepos,
} from '../redux/actions';


jest.mock('../apis/repositories');

it('should run the repositories saga with success response', async () => {
  const data = [
    { id: 1, name: 'mock-redux-saga', html_url: '/' },
  ];
  
  fetchReposApi.mockImplementationOnce(withBackendSuccess(data));
  const sagaHistory = await runSaga(
    fetchReposAsync(fetchReposAction('belchior')),
  );

  expect(sagaHistory.hasActionType(FETCH_REPOS_STARTED)).toBeTruthy();
  expect(sagaHistory.get(1)).toEqual(data);
  expect(sagaHistory.hasAction(setRepos(data))).toBeTruthy();
  expect(sagaHistory.hasActionType(FETCH_REPOS_FINISHED)).toBeTruthy();
});
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
