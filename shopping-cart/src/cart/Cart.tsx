import { Wrapper } from "../app.styles";
import CartItem from "../cartItems/CartItems";
import { CartItemType } from "../App";

type PropsData = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeCart: (id: number) => void;
};

const Cart: React.FC<PropsData> = ({ cartItems, addToCart, removeCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your cart</h2>
      {cartItems.length === 0 ? <p>No Items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeCart={removeCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
