/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "../../redux/apis/api";

const Products = () => {
  const { data: products = [], isLoading } = useGetAllProductsQuery(null);
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl text-center">All Products</h1>
      {isLoading && <p>Loading...</p>}
      <div className="space-y-3 mt-5">
        {products.map((product: any) => (
          <div className="border p-3 rounded-md flex justify-between">
            <p>{product.model}</p>
            <p>{product.price} BDT</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
