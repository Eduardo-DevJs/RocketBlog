import { Lista } from "./Lista"

export const Header = () => {
  return (
    <header className="bg-purple-900">
      <div className="header flex items-center justify-between m-auto max-w-7xl p-8">
        <h1 className="font-sans text-4xl font-bold text-zinc-50">The blog</h1>
        <Lista />
        <input placeholder="Buscar"className="bg-purple-950 p-2 text-base text-zinc-50" type="text" />
      </div>
    </header>
  )
}