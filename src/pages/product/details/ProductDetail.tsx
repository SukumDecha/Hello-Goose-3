import Navbar from "../../../components/navbar/Navbar";
import ProductDetails from "../../../components/products/details/ProductDetails";

const ProductDetail = () => {
  return (
    <div className="bg-red-500/80 w-full h-full">
      <Navbar></Navbar>
      <ProductDetails
        title="Hermes Allback backpack"
        price="301,200"
        desc="Backpack in Bivouac canvas and Swift calfskin with adjustable straps, leather handle, zipped main compartment, interior back laptop compartment, two exterior back pockets, hidden side pocket with leather cord and snap hook for keys, signature H leather patch and palladium-plated hardware"
        addToCardColor="#FFBE42"
      ></ProductDetails>
    </div>
  );
};
export default ProductDetail;
