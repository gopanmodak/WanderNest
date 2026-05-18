import { useContext } from "react";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

const Cart = () => {
  

  const navigate = useNavigate()
  const { cart,removeOnCart } = useContext(AuthProvider);

  

  const parsePrice = (price) => {
    if (!price) return 0;
    const cleaned = price.toString().replace(/[^0-9]/g, "");
    return Number(cleaned) || 0;
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + parsePrice(item.price);
  }, 0);



  const handleOnCart =()=>{

  navigate('/checkout')
  }

  return (
    <div className="my-20 font-sans max-w-6xl mx-auto px-4">

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          
          <div className="md:col-span-8 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border rounded-xl p-4 shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-20 w-24 rounded-lg object-cover"
                />

                <div>
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-blue-600 font-semibold">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <button className="bg-red-600 text-white p-2 rounded-md hover:bg-amber-500 transform-3d transform duration-300" onClick={()=>removeOnCart(item.id)}>Delete</button>
                </div>
              </div>
            ))}

          </div>

         
          <div className="md:col-span-4">

            <div className="sticky top-24 bg-white border rounded-2xl shadow-lg p-6 space-y-4">

              <h3 className="text-2xl font-bold border-b pb-3">
                Order Summary
              </h3>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-green-600 font-semibold">
                  {totalPrice} $
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>

              <div className="flex justify-between">
                <span>VAT (10%)</span>
                <span className="text-green-600 font-semibold">
                  {(totalPrice * 0.1).toFixed(2)} $
                </span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-green-700">
                  {(totalPrice + totalPrice * 0.1).toFixed(2)} $
                </span>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition" onClick={handleOnCart}>
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>
      ) : (
        <div className="h-96 flex flex-col justify-center items-center">
          <GrCart className="text-6xl text-gray-400" />
          <h3 className="text-xl font-bold mt-3">Your Cart is Empty</h3>
          <p className="text-gray-500 text-center">
            Looks like you haven't added anything yet.
          </p>
        </div>
      )}

    </div>
  );
};

export default Cart;