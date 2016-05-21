import { fork, take, put, call, select } from 'redux-saga/effects';
import { countDown } from './actions';
import { getCount } from './selectors';

let isCounting = false;

function wait() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
}

function* start() {
  while (true) {
    yield call(wait);
    yield put(countDown());
    const count = yield select(getCount);
    if (count <= 0) {
      isCounting = false;
    }
    if (!isCounting) {
      break;
    }
  }
}

function* setTimer() {
  while (true) {
    const action = yield take('SET_TIMER');
    yield put(action);
  }
}

function* startTimer() {
  while (true) {
    yield take('START_TIMER');
    if (!isCounting) {
      isCounting = true;
      yield fork(start);
    }
  }
}

function* stopTimer() {
  while (true) {
    yield take('STOP_TIMER');
    isCounting = false;
  }
}

export default function* rootSaga() {
  yield fork(setTimer);
  yield fork(startTimer);
  yield fork(stopTimer);
}
