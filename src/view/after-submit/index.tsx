import { Dispatch } from "futura";
import { AfterSubmit, ChangeBackgroundColor } from "../../state/after-submit";

export const AfterSubmitView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
	const { text, backgroundColor } = state;
	
	return (
		<div style={{backgroundColor}}>
			<h2>After Submit State</h2>
			<p>Your text is "{text.content}"</p>
			<button
				onClick={() => changeBackgroundColor(dispatch)}>
				Change Background Color
			</button>
		</div>);
}

/** Events */

const changeBackgroundColor = (dispatch: Dispatch<AfterSubmit.Event>) =>
	dispatch(new ChangeBackgroundColor());

interface Props {
	readonly state: AfterSubmit.State;
	readonly dispatch: Dispatch<AfterSubmit.Event>;
}