import { useParams } from "react-router-dom";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cartSlice/cartSlice";

interface Products {
  id: string | number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: string | number; // Keeping it as string | number for flexibility
}

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState<Products | null>(null);
  const dispatch = useDispatch();

  const fetchSingleProduct = async () => {
    const response = await fetch(`${API_URL}/${productId}`);
    const data = await response.json();
    console.log("data", data);
    setProductDetails(data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productDetails.id,
      title: productDetails.title,
      price: Number(productDetails.price), // Convert price to a number
      image: productDetails.image,
      quantity: 1, // Add a default quantity of 1
    }));
  };

  const formattedPrice = Number(productDetails.price).toLocaleString("en-US", { // Ensure it's a number for formatting
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="w-7/12 mx-auto mt-10">
      {productDetails ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-10">
          <div className="flex h-[300px]">
            <div className="w-1/2">
              <img
                src={productDetails.image}
                alt={productDetails.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-1/2 p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {productDetails.title}
              </h3>
              <p className="text-sm text-gray-600 my-2">
                {productDetails.category}
              </p>
              <p className="text-sm text-gray-800 my-2 line-clamp-6">
                {productDetails.description}
              </p>
              <h5 className="text-lg text-gray-800 my-2">{formattedPrice}</h5>
              <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductDetails;
