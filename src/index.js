import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App  from './App';

import '/node_modules/primeflex/primeflex.css'; // styles the primeflex
import './styles/styles.scss'; // styles globals

import './config/i18n' // config tranductions

//Tareas pendientes
//1. Crear el menu reponsive

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);