
export default function Hero(props) {
  return (
    <section className="h-[200px] bg-[url(hero_bg.png)] bg-cover bg-top flex justify-center">
      <article className="w-[1080px] flex flex-col items-start justify-center pl-[20px]">
        <span className="text-[20px] text-white font-bold">{props.first}</span>
        <span className="text-[50px] leading-[30px] text-white font-bold">{props.second}</span>
      </article>
    </section>
  )
}
