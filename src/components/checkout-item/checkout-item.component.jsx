import { useDispatch, useSelector } from "react-redux";
import { CheckoutItemContainer, ImageContainer, ImageContainerImg, Vals, Quantity, Arrow, RemoveBtn, Value } from "./checkout-item.styles";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
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
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Vals>{price}</Vals>
			<RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
