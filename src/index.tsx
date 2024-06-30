import React, { useState, useEffect } from 'react'; // Using Updated Libraries for State Management
import ReactDOM from 'react-dom';
import { init, Event, State, subscriptions, update } from "state";
import { AppView } from "view";
import { program } from 'futura'; // State Machine Library 

const App: React.FunctionComponent = () => {
  const [app, setApp] = useState(program<State, Event>({ init, update, subscriptions }));
  const [state, setState] = useState(app.state);
  const [pendingState, setPendingState] = useState<State>();
  const [ subscription, setSubscription] = useState(); // This app does not yet have subscriptions, but they can be added 

  useEffect(() => {
    app.observe((state) => {
      if (pendingState === undefined) {
        requestAnimationFrame(() => {
          const state = pendingState;
          setPendingState(undefined);
          if (state !== undefined) {
            setState(state);
          }
        });
      }
      setState(state);
      setPendingState(state);
    })
  }, [state]);

  const dispatch = (event: Event) => {
    requestAnimationFrame(() => {
      app.update(event);
    });
  }

  return (
    <AppView
      state={state}
      dispatch={dispatch} />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);