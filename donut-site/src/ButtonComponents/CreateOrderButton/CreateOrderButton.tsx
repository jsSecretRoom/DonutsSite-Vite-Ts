
import { useMyContext } from '../../Context/Context';

function CreateOrderButton({ totalReal, busketArray, productCount }) {
    const { setOrder } = useMyContext();

    let gudsArr = [];

    busketArray.map((item, i) => {
        
        return gudsArr.push({
            productName: item.name,
            count: productCount[i],
            photo:  item.foto
        })
    });

    const updateOrder = () => {
        
        const newOrder = {
            total: totalReal,
            orderGuds: gudsArr
        };

        
        setOrder(newOrder);
    };
    
    return ( 
        <button onClick={updateOrder}>Buy</button>
    );
}

export default CreateOrderButton;