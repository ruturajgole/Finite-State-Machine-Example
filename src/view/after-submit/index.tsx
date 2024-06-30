import { Dispatch } from "futura";
import { AfterSubmit, ChangeBackgroundColor, ErroneousPage } from "state/after-submit";

export const AfterSubmitView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
	const { text, backgroundColor } = state;
	
	return (
		<div style={{backgroundColor}}>
			<h2>After Submit State</h2>
			<p>Your text is {text.content.length ? `"${text.content}"` : 'empty'}</p>
			<button
				onClick={() => changeBackgroundColor(dispatch)}>
				Change Background Color
			</button>
			<button
				onClick={() => erroneousPage(dispatch)}>
				Erroneous Page
			</button>
		</div>);
}

/** Events */

const erroneousPage = (dispatch: Dispatch<AfterSubmit.Event>) =>
	dispatch(new ErroneousPage());

const changeBackgroundColor = (dispatch: Dispatch<AfterSubmit.Event>) =>
	dispatch(new ChangeBackgroundColor());

interface Props {
	readonly state: AfterSubmit.State;
	readonly dispatch: Dispatch<AfterSubmit.Event>;
}