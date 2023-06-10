import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDrop = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate("/checkout");
	};
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem
							key={item.id}
							CartItem={item}
						/>
					))
				) : (
					<EmptyMessage>Your Cart is empty!</EmptyMessage>
				)}
			</CartItems>
			<Button
				buttonType={BUTTON_TYPE_CLASSES[cartItems.length === 0 ? "disabled" : "base"]}
				onClick={goToCheckout}
			>
				Go to Checkout
			</Button>
		</CartDropdownContainer>
	);
};

export default CartDrop;
