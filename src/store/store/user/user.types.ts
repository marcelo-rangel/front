import { Action } from "../store.types"

export type User = {
    email: string
    password: string
}

export type UserState = {
    data: User | null
}

export type UserAction = Action<User>