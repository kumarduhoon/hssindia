import React from 'react';
import Layout from './src/Layout';

// Wrap every page element with a Layout component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};