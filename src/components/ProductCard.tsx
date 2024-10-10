import { FC } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cartSlice/cartSlice";

interface ProductCardProps{
    id: string | number
    image: string,
    title: string,
    price: number,
}

const ProductCard: FC<ProductCardProps> = ({
    id,
    image,
    title,
    price
})=> {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, image, price, quantity: 1 }));
  };

    const formattedPrice = price.toLocaleString("en-US",
     {
        style:"currency", 
        currency:"USD"
    })

    return(
        <div className="boder-green-200 overflow-hidden rounded-lg border bg-white">
            <img
             className="h-48 w-full object-cover" 
            src={image} 
            alt={title} 
            />
            <div className="p-4">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              {title}
            </h3>
            <p className="mb-4 text-gray-600">{formattedPrice}</p>
            <button
              className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Buy Now
            </button>
            <Link to={`/products/${id}`} className="block mt-4 text-blue-500 hover:underline">
          See Details
        </Link>
          </div>
        </div>
    )
}

export default ProductCard

//products