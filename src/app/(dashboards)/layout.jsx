import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-5'>
            <div className=''>
                <h1>sidebar</h1>
            </div>
            <div className='grid grid-cols-10'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;