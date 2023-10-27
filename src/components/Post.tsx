import Image from "next/image"
import firstpost from "@/image/post-1.png"

export const Post = () => {
  return (
    <>
      <section className="bg-white m-16">
        <div className="post flex m-auto max-w-7xl justify-between gap-10">
          <div className="first_col flex flex-col gap-3 max-w-prose">
            <Image src={firstpost} alt="" />
            <span>Outubro 04,2023</span>
            <h2 className="text_col font-bold">Começando no ReactJS em 2023</h2>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.</p>
          </div>
          <div className="second_col flex flex-col gap-10">
            <div className="first_text flex flex-col gap-3">
              <span>Outubro 04, 2023</span>
              <h2 className="text_col font-bold">Conheça as principais técnicas para conseguir uma vaga internacional em programação</h2>
              <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.</p>
            </div>
            <div className="second_text flex flex-col gap-3">
              <span>Outubro 04, 2023 </span>
              <h2 className="text_col font-bold">Veja a evolucao do Front-end na prática</h2>
              <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}