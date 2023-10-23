import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };
  let image = "";
  data.data.Image
    ? (image = data.data.Image)
    : (image =
        "https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">
          {data.data.Clase}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt="headphones"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.Placa}</span>
       
      </p>
    </div>
  );
};
export default Card;
