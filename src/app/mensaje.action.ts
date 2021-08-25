import { Action } from "@ngrx/store";

export const SPANISH = '[Message] Spanish';
export const ENGLISH = '[Message] English';

export class SpanishMsg implements Action {
    readonly type = SPANISH;

    constructor(public payload: string){

    }
}

export class EnglishMsg implements Action {
    readonly type = ENGLISH;

    constructor(public payload: string){

    }
}

export type MsgActions = SpanishMsg | EnglishMsg;