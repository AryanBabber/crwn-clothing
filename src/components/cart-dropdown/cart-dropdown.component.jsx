import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDrop = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckout = () => {
		navigate("/checkout");
	};
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						CartItem={item}
					/>
				))}
			</div>
			<Button buttonType={cartItems.length === 0 ? "disabled": "" } onClick={goToCheckout}>Go to Checkout</Button>
		</div>
	);
};

export default CartDrop;
