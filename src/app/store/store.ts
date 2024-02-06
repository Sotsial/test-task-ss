import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    counter: persistedCounterReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
