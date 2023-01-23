const thunkMiddleware =redux-thunk;
const { createStore, applyMiddleware } =redux
import reducer from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));