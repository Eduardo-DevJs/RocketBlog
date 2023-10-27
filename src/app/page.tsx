
import { Main } from "@/components/Main";
import { Header } from "../components/Header";
import { Post } from "@/components/Post";
import { ListaPosts } from "@/components/ListaPosts";
import Image from "next/image";
import PostDois from "@/image/post-2.png"
import PostTres from "@/image/post-3.png"
import PostQuatro from "@/image/post-4.png"


const Page = () => {
  return (
    <>
      <Header />
      <Main />
      <Post />

      <div className="flex gap-5 m-auto max-w-7xl">
        <ListaPosts
          img={PostDois}
          publicacao="Janeiro 04, 2023"
          titulo="10 dicas para conseguir a vaga desejada"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />

        <ListaPosts
          img={PostTres}
          publicacao="Outubro 04, 2023"
          titulo="10 dicas para conseguir a vaga desejada"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />

        <ListaPosts
          img={PostQuatro}
          publicacao="Outubro 04, 2023"
          titulo="Use essas dicas nas suas aplicações mobile"
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />
      </div>
    </>
  )
}

export default Page;
