import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { HIDE_ALERT, SHOW_ALERT } from '../types';
import { AlertContext } from './alertContext';
import { alertReduser } from './alertReduser';

export function AlertState({ children }) {
  const [state, dispatch] = useReducer(alertReduser, { visible: false });

  const show = (text, type = 'success') => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    });
  };

  const hide = () => dispatch({ type: HIDE_ALERT });

  const value = useMemo(() => ({
    show,
    hide,
    alert: state,
  }), [state]);

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
}

AlertState.propTypes = {
  children: PropTypes.element.isRequired,
};
