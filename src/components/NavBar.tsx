import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <nav id="navbar" className="w-[1080px] py-[15px] px-[20px] list-none bg-[#ff3b3c] flex justify-between text-[14px]
    sm:flex-col sm:justify-center sm:items-center flex-wrap
    md:flex-row">
      <li>
        <NavButton title="Ofertas" link="#"></NavButton>
      </li>
      <li>
        <NavButton title="Cómo comprar" link="#"></NavButton>
      </li>
      <li>
        <NavButton title="Costos y tarifas" link="#"></NavButton>
      </li>
      <li>
        <NavButton title="Mis pedidos" link="#"></NavButton>
      </li>
      <li>
        <NavButton title="Garantía" link="#"></NavButton>
      </li>
    </nav>
  )
}
