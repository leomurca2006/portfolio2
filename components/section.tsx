import { ReactNode } from "react";

type SectionProps = {
  titre: string;
  children: ReactNode;
};

export default function Section({ titre, children }: SectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">{titre}</h2>
      {children}
    </section>
  );
}