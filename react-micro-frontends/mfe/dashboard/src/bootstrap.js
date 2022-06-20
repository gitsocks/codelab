import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (root) => {
    const app = createApp(Dashboard);
    app.mount(root);
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) mount(devRoot);
}

export { mount };
