import React from 'react';
import LoggedIn from './logged-in';
import LoggedOut from './logged-out';
import {useSelector} from 'react-redux';

export default function Navigation() {
  const isAdmin = useSelector(state => state.isAdmin);
  return !isAdmin ? <LoggedOut /> : <LoggedIn />;
}
