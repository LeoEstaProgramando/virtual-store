export default function Footer() {
  return (
    <footer className="min-h-[250px] bg-[#7525a7] flex flex-col items-center">
      <div id="footer" className="flex justify-between px-[15px] py-[20px]
      sm:flex-col sm:items-center sm:justify-center sm:text-center sm:text-md
      md:flex-row md:items-start w-full
      ">
        <ul className="w-[170px] list-none p-[10px] px-0 py-[5px]
        sm:py-3">
          <li className="font-bold pb-[20px] text-center">
            <a className="text-white underline text-center" href="./index.html">Ofertas</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Laptops</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Audio</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Auriculares</a>
          </li>
        </ul>
        <ul className="w-[170px] list-none p-[10px] px-0 py-[5px]
        sm:py-3">
          <li className="font-bold pb-[20px] text-center">
            <a className="text-white underline text-center" href="./index.html">Cómo comprar</a>
          </li>
          <li className="px-[]">
            <a className="text-white no-underline text-center" href="./index.html">Formas de pago</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Envios</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Devoluciones</a>
          </li>
        </ul>
        <ul className="w-[170px] list-none p-[10px] px-0 py-[5px] sm:py-3">
          <li className="font-bold pb-[20px] text-center">
            <a className="text-white underline text-center" href="./index.html">Costos y tarifas</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Impuestos</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Facturación</a>
          </li>
        </ul>
        <ul className="w-[170px] list-none p-[10px] px-0 py-[5px] sm:py-3">
          <li className="font-bold pb-[20px] text-center">
            <a className="text-white underline text-center" href="./index.html">Mis pedidos</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Pedir nuevamente</a>
          </li>
          <li className="p-[5px] text-center">
            <a className="text-white no-underline text-center" href="./index.html">Lista de deseos</a>
          </li>
        </ul>
        <ul className="w-[170px] list-none p-[10px] px-0 py-[5px] sm:py-3">
          <li className="font-bold pb-[20px] text-center">
            <a className="text-white underline text-center" href="./index.html">Garantía</a>
          </li>
        </ul>
      </div>
      <div className="w-[1080px] rounded-[1px] border-solid border-[#ba53fb] text-center text-white font-bold py-[30px] box-border">Curso de HTML + CSS 2023</div>
    </footer>
  )
}
