import { Action } from "@ngrx/store";

export interface appState {
    texto: string
}

export const initialState = {
    texto: 'Initial State'
}

export function miReducer(state: appState = initialState, action: Action) {
    console.log(action);

    switch(action.type){
        case 'SPANISH':
            return {
                ...state,
                texto: 'Hola Mundo'
            }
        case 'ENGLISH':
            return {
                ...state,
                texto: 'Hello World'
            }
        default:
            return state;
    }
}