import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (root, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) history.listen(onNavigate);
    ReactDOM.render(<App history={history} />, root)

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname: currentPathName } = history.location;
            if (currentPathName !== nextPathName) history.push(nextPathName);
        }
    }
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}

export { mount };
