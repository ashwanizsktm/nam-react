import { CDN_URL } from '../utils/constants'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux';


const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatching an action..
        dispatch(addItem(item))
    }

    return (
        <>
            {items.map((item) => (
                <div className="items-container" key={item?.card?.info?.id}>
                    <div>
                        <h2 className="name">{item?.card?.info?.name}
                            <span style={{ marginLeft: '25px' }}>Price - ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}.00 </span> </h2>
                        <p className="desc">{item?.card?.info?.description}</p>
                    </div>
                    <div className='img-wrapper'>
                        <img src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                        <button style={{cursor: 'pointer'}} onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemList