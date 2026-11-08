import Section from "@/components/section"

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Section titre="Contact">
        <ul className="flex flex-col gap-3">
          <li>
            <span className="text-neutral-500">Email : </span>
            <a href="mailto:ton@email.fr" className="underline">leo.murca@edu.devinci.fr</a>
          </li>
          <li>
            <span className="text-neutral-500">Téléphone : </span>
            <a href="tel:+33600000000" className="underline">06 63 73 79 88</a>
          </li>
          <li>
            <span className="text-neutral-500">Adresse : </span>
            <span>41 avenue des peupliers à Montfermeil</span>
          </li>
        </ul>
      </Section>
    </main>
  )
}