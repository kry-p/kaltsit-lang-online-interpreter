/**
 * React app core
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorkerRegisteration from './serviceWorkerRegistration';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

serviceWorkerRegisteration.register();
root.render(<App />);
