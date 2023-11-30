// Loader react component
// ----------------------------------------------------------------------
import React from 'react';
import {LoaderSvg} from './Spinner';
import './Loader.scss';

export const Loader = () => {
    return (
        <div className="loader">
            <LoaderSvg />
        </div>
    );
};
