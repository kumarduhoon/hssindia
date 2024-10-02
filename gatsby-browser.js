import React from 'react';
import Layout from './src/Layout';
import './src/styles/global.css'
import 'swiper/css'

// Wrap every page element with a Layout component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
