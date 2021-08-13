import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import ProfileReducer from "./profile-Reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { AdvertisementReducer } from "./advertisement-Reducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  advertisement: AdvertisementReducer,
});

type PropertyType<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertyType<T>>;

export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
