import { fork, take, put, call } from 'redux-saga/effects';
import { countUp } from './actions';

let timer = null;

function wait() {
  return new Promise(resolve => {
    timer = setTimeout(() => resolve(), 1000);
  });
}

function* start() {
  while (true) {
    yield call(wait);
    yield put(countUp());
    if (timer === null) {
      break;
    }
  }
}

function* incrementalCount() {
  while (true) {
    yield take('BUTTON_CLICK');
    if (timer === null) {
      yield fork(start);
    } else {
      clearInterval(timer);
      timer = null;
    }
  }
}

export default function* rootSaga() {
  yield fork(incrementalCount);
}
