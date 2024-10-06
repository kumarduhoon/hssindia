import React from 'react';
import Layout from './src/Layout';
import Alpine from 'alpinejs';
import './src/styles/global.css'
import 'swiper/css'

// Wrap every page element with a Layout component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};



export const onClientEntry = () => {
    window.Alpine = Alpine;
    Alpine.start();
};