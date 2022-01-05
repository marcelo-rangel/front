import { State } from "../store.types";

export const isAuthenticated = (state: State) => !!state.user.data
