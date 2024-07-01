import { Link } from "react-router-dom"

export default function NavButton(props) {
  return (
    <Link className="text-white font-bold text-center no-underline w-[150px] py-[5px] inline-block text-[14px] hover:underline text-base" to={props.link}>{props.title}</Link>
  )
}
