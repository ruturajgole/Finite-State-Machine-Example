import { Next } from "futura";
import { AfterSubmit } from "./after-submit";
import { BeforeSubmit } from "./before-submit";
import { Error } from "./error";

export const init:() => Next<State> = BeforeSubmit.init;

export const update = (state: State, event: Event) =>
	state.update(event);

export const subscriptions = (state: State) =>
	state.subscriptions();

export type State
	= BeforeSubmit
	| AfterSubmit
	| Error;

export type Event
	= BeforeSubmit.Event
	| AfterSubmit.Event
	| Error.Event;