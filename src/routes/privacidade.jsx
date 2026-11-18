import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { EVENT } from "@/lib/event-data";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade · CivilTec" },
      {
        name: "description",
        content:
          "Como o CivilTec trata os dados de inscrição, submissão de trabalhos e contato, conforme a LGPD.",
      },
      { property: "og:title", content: "Política de privacidade · CivilTec" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

const BLOCKS = [
  {
    title: "Quais dados coletamos",
    text: "No formulário de inscrição pedimos nome completo, e-mail, CPF, categoria e instituição. Na submissão de trabalhos pedimos título, autores, e-mail do responsável, eixo temático e resumo. Não coletamos dados de pagamento no site.",
  },
  {
    title: "Para que usamos",
    text: "Os dados de inscrição servem para reservar a vaga, emitir o certificado, organizar o credenciamento e enviar informações operacionais do congresso. Os dados de submissão servem para avaliar o trabalho e publicar os anais.",
  },
  {
    title: "Com quem compartilhamos",
    text: "Apenas com a comissão organizadora do congresso e, no caso de submissões, com os avaliadores da comissão científica. Não vendemos nem cedemos dados para terceiros com finalidade comercial.",
  },
  {
    title: "Por quanto tempo guardamos",
    text: "Os registros de inscrição e submissão ficam armazenados pelo período necessário à emissão de certificados e à publicação dos anais, e podem ser eliminados a pedido do titular.",
  },
  {
    title: "Seus direitos",
    text: "Você pode solicitar confirmação de tratamento, correção, portabilidade ou exclusão dos seus dados a qualquer momento, escrevendo para a organização. Respondemos em até 15 dias.",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="bg-ink pt-[72px] text-ink-foreground">
        <div className="mx-auto w-full max-w-[820px] px-5 py-14 sm:px-8 md:py-20">
          <p className="label-mono text-ink-foreground/50">Documento legal</p>
          <h1 className="mt-4 font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
            Política de privacidade
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-foreground/65">
            Esta política explica como o {EVENT.name} trata os dados pessoais informados no site,
            em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[820px] px-5 py-14 sm:px-8 md:py-20">
        <dl className="space-y-8">
          {BLOCKS.map((block) => (
            <div key={block.title} className="border-t border-ink/15 pt-5">
              <dt className="font-heading text-lg font-extrabold text-ink">{block.title}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink/70">{block.text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border border-ink/15 bg-concrete/50 p-6">
          <p className="label-mono text-ink/45">Controlador dos dados</p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">
            Comissão organizadora do {EVENT.shortName} — CORTEC · CCTA/UEPB
            <br />
            {EVENT.address}
            <br />
            Contato: {EVENT.email}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}