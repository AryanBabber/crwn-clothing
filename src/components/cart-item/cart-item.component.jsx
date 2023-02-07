import {CartItemContainer, CartImage, ItemDetails, Name} from "./cart-item.styles";

const CartItem = ({ CartItem }) => {
	const { name, quantity, imageUrl, price } = CartItem;
	return (
		<CartItemContainer>
			<CartImage
				src={imageUrl}
				alt={name}
			/>
			<ItemDetails>
				<Name>{name}</Name>
				<span className="price">
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
