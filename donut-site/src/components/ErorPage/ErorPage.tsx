import './ErorPage.scss'
import { useRouteError } from 'react-router-dom';

function ErorPage() {
    const error: any = useRouteError();
    const statusText = error?.statusText || "Unknown error";
    
    return ( 
        <>
            <h1>Oops!</h1>
            <p>Sorry, something went wrong</p>
            <p>{statusText}</p>
        </>
    );
}

export default ErorPage;