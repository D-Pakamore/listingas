import CircularProgress from '@mui/material/CircularProgress';


const LoadingSpinner = () => {
    // const viewportBottomPosition = window.innerHeight + window.pageYOffset
    return(
        <CircularProgress sx={{ position: 'fixed', right: '60px', bottom: '20px' }} size={30} color="secondary"/>
    );
}

export default LoadingSpinner;