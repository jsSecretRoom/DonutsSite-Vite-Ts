import './LineComponent.scss';

function LineComponent({ images }: { images?: string[] }) {
    return (
        <div className='animation-line'>
            {images && images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
        </div>
    );
}

export default LineComponent;