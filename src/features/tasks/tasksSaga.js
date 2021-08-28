import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHendler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield call(alert, "Cos poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler)
};