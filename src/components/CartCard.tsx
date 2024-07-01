import { useRef } from "react";
import ProductProp from "../interfaces/ProductProp";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products";

export default function Cartproduct({product}: ProductProp) {

  const {id, title, description, price, images, colors, units} = product;

  const quantity = useRef(0);
  const dispatch = useDispatch();
  
  const handleUnits = () => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart"));
    const one = productsOnCart.find((each) => each.id === id);
    one.units = Number(quantity.current.value);
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
    dispatch(calculateTotal({products: productsOnCart}))
  };
 
  return (
    <article className="bg-[#f2f2f2] w-[680px] rounded-[5px] p-[30px] m-[10px] h-[220px] flex justify-between break-words items-center">
      <img className="w-[100px] h-[100px] rounded-[5px]" src={images[0]} alt={title} />
      <div className="flex flex-col justify-between gap-[2px] w-[340px] h-[100px]">
        <strong className="">{product.title}</strong><span className="text-nowrap overflow-hidden text-ellipsis">- {colors[0]}</span>
        <p className="text-nowrap overflow-hidden text-ellipsis">{description}</p>
        <input className="w-[70px] h-[40px] rounded-[10px] border-[1px] border-[#eaeaea] border-solid p-[5px]" type="number" name="quantity" ref={quantity} defaultValue={units} onChange={handleUnits} min="1" id={id} />
      </div>
      <strong className="">AR$ ${price}</strong>
    </article>
  )
}
