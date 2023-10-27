import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


type Props = {
  img: StaticImport;
  publicacao?: string;
  titulo?: string;
  descricao?: string;
}

export const ListaPosts = ({img,publicacao, titulo, descricao }: Props) => {
  return (
    <>
      <section className="bg-white">
        <div className="listaPosts ">
          <ul>
            <li className="flex flex-col gap-3">
              <Image src={img} alt="" />
              <span>{publicacao}</span>
              <h2 className="text-fuchsia-950 font-bold text-xl">{titulo}</h2>
              <p className="leading-relaxed">{descricao}</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}