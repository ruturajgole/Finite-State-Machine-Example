import { Next } from "futura";
import { getRandomColor, Message } from "../../services";

/** State */
export class AfterSubmit implements AfterSubmit.State {
  public static init = (text: Message.Text): Next<AfterSubmit> => ({
    state: new AfterSubmit(text),
    requests: [
    ],
  })

  public update(event: any): Next<AfterSubmit> {
		if(event instanceof ChangeBackgroundColor){
			return {
				state: new AfterSubmit(
					this.text,
					getRandomColor(),
				)
			}
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
	= ChangeBackgroundColor;
}


/** Messages */

export class ChangeBackgroundColor {}