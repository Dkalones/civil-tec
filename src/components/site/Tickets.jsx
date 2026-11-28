import SectionHeading from "@/components/site/SectionHeading";
import RegistrationWindow from "@/components/site/RegistrationWindow";

export default function Tickets() {
  return (
    <section id="ingressos" className="border-t border-ink/10 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="06"
          eyebrow="Inscrições"
          title="Participe do CivilTec."
          description="Confira o período de inscrições e garanta sua vaga no congresso."
        />
        <div className="mt-12">
          <RegistrationWindow compact />
        </div>
      </div>
    </section>
  );
}
