import { Next } from "futura";
import { getRandomColor, Message } from "services";
import { BeforeSubmit } from "state/before-submit";
import { Error } from "state/error";

/** State */
export class AfterSubmit implements AfterSubmit.State {
  public static init = (text: Message.Text): Next<AfterSubmit> => ({
    state: new AfterSubmit(text),
    requests: [
    ],
  })

  public update(event: any): Next<AfterSubmit | BeforeSubmit | Error> {
		if(event instanceof ChangeBackgroundColor){
			return {
				state: new AfterSubmit(
					this.text,
					getRandomColor(),
				)
			}
		} else if(event instanceof ErroneousPage) {
			return Error.init();
		} else {
    	return { state: this };
		}
  }

  public subscriptions = () => []

  private constructor(
		readonly text: Message.Text,
		readonly backgroundColor?: string,
  ) {}
}


/** Types */

export namespace AfterSubmit {
  export interface State {
		readonly text: Message.Text;
		readonly backgroundColor?: string;
	}

	export type Event
	= ChangeBackgroundColor
	| ErroneousPage;
}


/** Messages */

export class ChangeBackgroundColor {}
export class ErroneousPage {}