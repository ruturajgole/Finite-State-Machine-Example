import { Next } from "futura";
import { AfterSubmit } from "./after-click";
import { BeforeSubmit } from "./before-click";

export const init:() => Next<State> = BeforeSubmit.init;

export const update = (state: State, event: Event) =>
	state.update(event);

export const subscriptions = (state: State) =>
	state.subscriptions();

export type State
	= BeforeSubmit
	| AfterSubmit;

export type Event
	= BeforeSubmit.Event
	| AfterSubmit.Event;