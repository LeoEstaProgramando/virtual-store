import {useSelector } from "react-redux";
import Swal from "sweetalert2";
import { calculateTotal } from "../store/actions/products";

export default function CartResume() {

  const total = useSelector(store => store.products.total)

  function buyProducts() {
    Swal.fire({
      title: "Desea confirmar su compra?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Gracias por su Compra!", "", "success");
        localStorage.removeItem("cart")
      } else if (result.isDenied) {
        Swal.fire("Su compra fue cancelada!", "", "warning");
      }
    });
  }

  return (
    <div className="bg-[#f2f2f2] w-[340px] rounded-[5px] p-[30px] m-[10px] h-[220px] flex flex-col justify-between break-words">
        <div className="flex grow flex-col justify-between">
          <h2 className="flex justify-between"><span>Resumen</span><span>del</span><span>pedido</span></h2>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <strong className="">${total}</strong>
          </div>
          <small className="pb-[10px]">Incluye impuesto PAIS y percepción AFIP.</small>
        </div>
        <button className="w-full bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-[10px] hover:bg-[#ff5151]" id="buy" type="button" onClick={buyProducts} >COMPRAR</button>
      </div>
  )
}
