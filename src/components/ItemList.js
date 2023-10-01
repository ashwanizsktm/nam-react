import {CDN_URL} from '../utils/constants'
const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <div className="items-container" key={item?.card?.info?.id}>
                    <div>
                        <h2 className="name">{item?.card?.info?.name}   
                         <span style={{marginLeft: '25px'}}>Price - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}.00 </span> </h2>
                        <p className="desc">{item?.card?.info?.description}</p>
                    </div>
                    <div className='img-wrapper'>
                        <img src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                        <span>Add +</span>
                    </div>
                 </div>
            ))}
        </>
    )
}

export default ItemList