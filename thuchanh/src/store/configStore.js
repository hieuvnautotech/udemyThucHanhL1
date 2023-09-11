import entriesReducer from '../reducers/entries.reducers'
import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {initSagas} from '../sagas/index'

const configureStore = () =>{
    const store = createStore(
        combineReducers({
            entries: entriesReducer,

        })
        combineWithDevTools((applyMiddleware(...middlewares)))
    )
    initSagas(sagaMiddleware)
    return store
}
export default configureStore