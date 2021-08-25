import { Action } from "@ngrx/store";
import { from } from "rxjs";
import * as fromMessage from "./mensaje.action";

export interface appState {
    texto: string
}

export const initialState = {
    texto: 'Initial State'
}

export function miReducer(state: appState = initialState, action: fromMessage.MsgActions) {
    console.log(action);

    switch(action.type){
        case fromMessage.SPANISH:
            return {
                ...state,
                texto: action.payload
            }
        case fromMessage.ENGLISH:
            return {
                ...state,
                texto: action.payload
            }
        default:
            return state;
    }
}