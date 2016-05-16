import { fork, take, put } from 'redux-saga/effects';
import { countUp } from './actions';

function* incrementalCount() {
  while (true) {
    yield take('BUTTON_CLICK');
    yield put(countUp());
  }
}

export default function* rootSaga() {
  yield fork(incrementalCount);
}
