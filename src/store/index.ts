import { LoadingStore } from "./loading/action";

import { IStore, IStoreContent } from "./types";

export const Store: IStore = (): IStoreContent => {
  const loadingStore = LoadingStore();

  return {
    actions: {
      loadingAction: loadingStore.actions,
    },
    state: {
      loading: loadingStore.state,
    },
  };
};
