import Button from "@material-ui/core/Button";
//types
import { CartItemType } from "../App";
//styes
import { Wrapper } from "./item.styles";

type PropsData = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export const Item: React.FC<PropsData> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);
