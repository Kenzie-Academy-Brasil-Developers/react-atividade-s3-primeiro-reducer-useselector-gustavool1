import { createStore, combineReducers } from "redux";

import reducerFruits from "./modules/fruits/reducer";

const reducers = combineReducers( {fruits: reducerFruits});

const store = createStore(reducers)

export default store