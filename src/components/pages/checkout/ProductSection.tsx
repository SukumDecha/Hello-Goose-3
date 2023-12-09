import { ProductProps } from "../home/product/ProductList";
import ProductItem from "./product/ProductItem"

export interface ProductSection extends ProductProps {
  quantity: number
}

interface ProductSectionProps {
  selectedItems: ProductSection[];
}

export const ProductSection = ({ selectedItems }: ProductSectionProps) => {

  return (
    <div>
      <div className="flex justify-between text-2xl mb-5  font-margarine text-white">
        <div className="w-4/12 ml-4  ">PRODUCT</div>
        <div className="w-7/12 flex justify-between">
          <span className="">QTY</span>
          <span>PRICE</span>
          <span className="mr-9">TOTAL</span>
        </div>
      </div>
      {
        selectedItems.map((p,index)=> (
           <ProductItem title={p.name} major={p.major} quantity={p.quantity} price={p.price} key={index} />
        ))
      }
     

      <hr className="bg-white mx-3 my-7" />
    </div>
  );
};

export default ProductSection;
