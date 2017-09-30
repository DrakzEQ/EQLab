import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../api.js'
import { 
  SUBAPP_UNLOAD,
  GLOBAL_RESET,
  GLOBAL_LOAD_SPAWNEDITOR,
  GLOBAL_UNLOAD_SPAWNEDITOR,
  GLOBAL_UPDATE_SPAWN2,
  GLOBAL_DELETE_SPAWN2,
  GLOBAL_CHANGE_SPAWNGROUP,
  GLOBAL_POST_SPAWNGROUP,
  GLOBAL_UPDATE_SPAWNGROUP,
  GLOBAL_DELETE_SPAWNGROUP,
  GLOBAL_POST_SPAWNENTRY,
  GLOBAL_DELETE_SPAWNENTRY,
  ZONEAPP_RESET,
  ZONEAPP_SELECT_ZONE,
  ZONEAPP_SET_ZONE,
  ZONEAPP_BUILD_SPAWNTREE,
  ZONEAPP_POST_SPAWN2,
  ZONEAPP_ADD_SPAWN2
} from '../constants/actionTypes'


export default function* rootSaga() {
  yield all([
    takeLatest(SUBAPP_UNLOAD, unloadSubApp),
    takeLatest(GLOBAL_UPDATE_SPAWN2, updateSpawn2),
    takeLatest(GLOBAL_DELETE_SPAWN2, deleteSpawn2),
    takeLatest(GLOBAL_CHANGE_SPAWNGROUP, changeSpawngroup),
    takeLatest(GLOBAL_POST_SPAWNGROUP, postSpawngroup),
    takeLatest(GLOBAL_UPDATE_SPAWNGROUP, updateSpawngroup),
    takeLatest(GLOBAL_DELETE_SPAWNGROUP, deleteSpawngroup),
    takeLatest(GLOBAL_POST_SPAWNENTRY, postSpawnentry),
    takeLatest(GLOBAL_DELETE_SPAWNENTRY, deleteSpawnentry),
    takeLatest(ZONEAPP_SELECT_ZONE, selectZone),
    takeLatest(ZONEAPP_POST_SPAWN2, postSpawn2)
  ]);
}

function* unloadSubApp(action) {
  yield all([
    put({ type: GLOBAL_RESET }),
    put({ type: ZONEAPP_RESET })
  ]);
}

function* selectZone(action) {
  const [spawnTree] = yield all([
    call(api.zone.getSpawnTreeData, action.zone)
  ]);

  yield all([
    put({ type: ZONEAPP_SET_ZONE, zone: action.zone }),
    put({ type: ZONEAPP_BUILD_SPAWNTREE, spawnTree })
  ]);
}

function* refreshSpawns(spawn2ID, zone) {
  const [spawn, spawnTree] = yield all([
    call(api.zone.getSpawnData, spawn2ID),
    call(api.zone.getSpawnTreeData, zone)
  ]);

  yield all([
    put({ type: GLOBAL_LOAD_SPAWNEDITOR, payload: spawn }),
    put({ type: ZONEAPP_BUILD_SPAWNTREE, spawnTree })
  ]);
}

function* postSpawn2(action) {
  yield put({ type: ZONEAPP_ADD_SPAWN2, data: action.data });
}

function* updateSpawn2(action) {
  if (action.id && action.context === 'zoneApp') {
    yield call(refreshSpawns, action.id, action.zone);
  }
}

function* deleteSpawn2(action) {
  if (action.id && action.context === 'zoneApp') {
    yield call(api.zone.deleteSpawn2, action.id);

    const spawnTree = yield call(api.zone.getSpawnTreeData, action.zone);

    yield all([
      put({ type: GLOBAL_UNLOAD_SPAWNEDITOR }),
      put({ type: ZONEAPP_BUILD_SPAWNTREE, spawnTree })
    ]);
  }
}

function* changeSpawngroup(action) {
  if (action.spawn2ID && action.context === 'zoneApp') {
    yield call(api.zone.updateSpawn2, action.spawn2ID, { "spawngroupID": action.spawngroupID });
    yield call(refreshSpawns, action.spawn2ID, action.zone);
  }
}

function* postSpawngroup(action) {
  if (action.spawn2ID && action.context === 'zoneApp') {
    yield call(api.zone.postSpawngroup, action.spawn2ID, action.zone);
    yield call(refreshSpawns, action.spawn2ID, action.zone);
  }
}

function* updateSpawngroup(action) {
  if (action.spawn2ID && action.context === 'zoneApp') {
    yield call(refreshSpawns, action.spawn2ID, action.zone);
  }
}

function* deleteSpawngroup(action) {
  if (action.context === 'zoneApp') {
    yield call(api.zone.deleteSpawngroup, action.id);
    yield call(refreshSpawns, action.spawn2ID, action.zone);
  }
}

function* postSpawnentry(action) {
  if (action.context === 'zoneApp') {
    yield call(api.zone.postSpawnentry, action.spawngroupID, action.npcID);
    yield call(refreshSpawns, action.spawn2ID, action.zone);
  }
}

function* deleteSpawnentry(action) {
  if (action.context === 'zoneApp') {
    yield call(api.zone.deleteSpawnentry, action.spawngroupID, action.npcID);
    yield call(refreshSpawns, action.spawn2ID, action.zone);
  }
}