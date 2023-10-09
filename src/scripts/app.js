/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../node_modules/jquery/dist/jquery.min.js';
import './styles/style.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
// eslint-disable-next-line import/no-unresolved
import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
const sideNav = document.querySelectorAll('.sidenav');
// eslint-disable-next-line no-undef
M.Sidenav.init(sideNav);
