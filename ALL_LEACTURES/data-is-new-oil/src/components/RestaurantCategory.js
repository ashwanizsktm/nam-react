import { useState } from 'react';
import ItemList from './ItemList'
const RestaurantCategory = ({category, showItems, setShowIndex}) => {
// const [showItems, setShowItems] = useState(false);
	/**
	 	*  if I take out the state from this component to parent component then it'll become the uncontrolled component 
	 	*  bcz it'll will not have their own state and it will be controlled by parent & we can use showItems from the props.
		*  this is also known as lifting the state up bcz we are lifting the state up from the this Restaurant category to 
		   RestaurantMenu component.
	 */
	const { title, itemCards } = category?.card?.card;

	const toggleAccordian = () => {
		setShowIndex();
	}

	return (
		<div className="accordian-container">
			<div className="header" onClick={toggleAccordian}>
				<h1>{title} ({itemCards.length})</h1>
				<span style={{ height: '20px', width: '20px' }}>
					<img src="https://icon2.cleanpng.com/20180203/paw/kisspng-menu-arrow-icon-down-arrow-png-transparent-image-5a756e457638b4.3161758215176453814842.jpg"
						style={{ height: '20px', width: '20px' }} />
				</span>
			</div>
			<div className='body'>
				{showItems && <ItemList items={itemCards} />}
			</div>
		</div>
	)
}

export default RestaurantCategory;