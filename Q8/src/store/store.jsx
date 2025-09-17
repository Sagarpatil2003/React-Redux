import {createStore} from "redux"
import counterReducers from "../reducers/Reducers"

export let store = createStore(counterReducers)