import React from 'react';
const fakeApi = () => Promise.resolve(listsp);
function Layout(props) {
    const { children } = props;
    return (
        <>
            {children}
        </>
    );
}

export default Layout;