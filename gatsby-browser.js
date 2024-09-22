import React from 'react';
import Layout from './src/Layout';
import './src/styles/global.css'

// Wrap every page element with a Layout component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};

// export const onRouteUpdate = ({ location }) => {
//     if (location.action === 'PUSH') {
//         window.scrollTo(0, 0);
//     }
// };