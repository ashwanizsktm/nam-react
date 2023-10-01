import { useState } from 'react';
import ItemList from './ItemList'
const RestaurantCategory = ({category, showItems, setShowIndex}) => {
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