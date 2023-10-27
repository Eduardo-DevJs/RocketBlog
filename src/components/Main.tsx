import imagemMain from "@/image/featured-image.svg"
import Image from "next/image"

export const Main = () => {
  return (
    <div className="bg-main">
      <main className="container_main m-auto max-w-7xl flex items-center gap-10 justify-between">
        <div className="textos flex flex-col gap-5">
          <h1 className="titulo_main font-bold text-4xl text-fuchsia-500">Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h1>
          <p className="text-zinc-50 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </p>
          <a className="text-fuchsia-500 font-bold font-mono" href="#">Veja Mais</a>
        </div>

        <Image src={imagemMain} alt=""/>
      </main>
    </div>
  )
}

