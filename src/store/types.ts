import { ILoadingActions, ILoadingState } from "./loading/types";

export interface IStoreContent {
  actions: IActions;
  state: IStates;
}

export interface IStates {
  loading: ILoadingState;
}

export interface IActions {
  loadingAction: ILoadingActions;
}

export type IStore = () => IStoreContent;
