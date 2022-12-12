import Nav from './Nav';

const Layout = ({ children, loading }) => {
    return (
        <>
            <Nav loading={loading}/>
            {children}
        </>
    )
}; 

export default Layout;