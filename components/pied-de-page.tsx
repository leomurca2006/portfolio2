import { ReactNode } from "react"

type Props = {
    titre: string,
    children: ReactNode
}


export default function PiedDePage({titre, children}: Props) {
    return(
    <footer className="py-10 text-center flex flex-col items-center justify-center">
      <h2 className="mb-6 text-2xl font-semibold">{titre}</h2>
      {children}
    </footer>
    )
}