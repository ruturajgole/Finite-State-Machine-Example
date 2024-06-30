import { Next } from "futura";
import { BeforeSubmit } from "../before-submit";

/** State */
export class Error implements Error.State {
  public static init = (): Next<Error> => ({
    state: new Error(),
    requests: [
    ],
  })

  public update(event: any): Next<Error | BeforeSubmit> {
		if(event instanceof Refresh){
			return BeforeSubmit.init();
		}
    return { state: this };
  }

  public subscriptions = () => []

  private constructor(
  ) {}
}


/** Types */

export namespace Error {
  export interface State {
	}

  export type Event = Refresh;
}


/** Messages */
export class Refresh {}