// @flow
import { fork, take, put, call, select } from 'redux-saga/effects';
import { CounterActionsForSaga } from './actions';
import type { CounterType } from './actions';
import { getCount } from './selectors';

let isCounting = false;

function wait() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 1000);
  });
}

function takeCountAction(counterType: CounterType) {
  return take(counterType);
}

function* start() {
  while (true) {
    yield call(wait);
    yield put(CounterActionsForSaga.countDown());
    const count: any = yield select(getCount);
    if (count <= 0) {
      isCounting = false;
    }
    if (!isCounting) {
      break;
    }
  }
}

function* changeTerm() {
  while (true) {
    const action = yield takeCountAction('CHANGE_TERM');
    yield put(action);
  }
}

function* startTimer() {
  while (true) {
    yield takeCountAction('START_TIMER');
    if (!isCounting) {
      isCounting = true;
      yield fork(start);
    }
  }
}

function* stopTimer() {
  while (true) {
    yield takeCountAction('STOP_TIMER');
    isCounting = false;
  }
}

export default function* rootSaga(): Generator {
  yield fork(startTimer);
  yield fork(stopTimer);
  yield fork(changeTerm);
}
