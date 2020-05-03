import { all, fork } from 'redux-saga/effects'
// import watchLogoutSaga from './watchers/logout'

export default function* root() {
  yield all([
        // fork(watchEmpProjectAllocationDataSaga)
  ])
}
