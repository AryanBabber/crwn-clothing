import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutItemContainer, ImageContainer, ImageContainerImg, Vals, Quantity, Arrow, RemoveBtn, Value } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<ImageContainerImg
					src={imageUrl}
					alt={name}
				/>
			</ImageContainer>
			<Vals>{name}</Vals>
			<Quantity>
				<Arrow
					onClick={() => removeItemFromCart(cartItem)}
				>
					&#10094;
				</Arrow>
				<Value>{quantity}</Value>
				<Arrow
					onClick={() => addItemToCart(cartItem)}
				>
					&#10095;
				</Arrow>
			</Quantity>
			<Vals>{price}</Vals>
			<RemoveBtn
				onClick={() => clearItemFromCart(cartItem)}
			>
				&#10005;
			</RemoveBtn>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
