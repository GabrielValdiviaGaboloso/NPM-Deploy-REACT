import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductCard as ProductCardHOC} from "./ProductCard";

import { ProductButtons } from "./Productbuttons";
import { ProductImage } from "./Productimage";
import { ProductTitle } from "./Productitle";


export { ProductButtons } from "./Productbuttons";
export { ProductImage } from "./Productimage";
export { ProductTitle } from "./Productitle";



export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {

  Title: ProductTitle,  
  Image: ProductImage,
  Buttons: ProductButtons,
  
})

export default ProductCard;