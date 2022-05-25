import React from 'react';
import { Dispatch } from 'futura';
import { Event, State } from "../state";
import { BeforeSubmit } from '../state/before-click';
import { AfterSubmit } from '../state/after-click';
import { BeforeSubmitView } from './before-submit';
import { AfterSubmitView } from './after-submit';

export const AppView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
  if(state instanceof BeforeSubmit){
    return (
      <BeforeSubmitView
        state={state}
        dispatch={dispatch} />);
  } else if (state instanceof AfterSubmit){
    return (
      <AfterSubmitView
        state={state}
        dispatch={dispatch} />);
  }
  return <></>;
}

interface Props {
  readonly state: State;
  readonly dispatch: Dispatch<Event>;
}

export default AppView;
