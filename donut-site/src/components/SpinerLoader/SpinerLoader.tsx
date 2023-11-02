import './SpinerLoader.scss';
import { ClipLoader } from 'react-spinners';
function SpinerLoader( {style} : any ) {
    return (
        <div className="loading-spinner" style={ style }>
            <ClipLoader color={'#007BFF'} size={35} />
        </div>
    );
}

export default SpinerLoader;