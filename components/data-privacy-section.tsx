import {
  Shield,
  Lock,
  MapPin,
  User,
  MessageSquare,
  Activity,
  Smartphone,
  Mail,
  Fingerprint,
  Link2,
  Unlink,
} from "lucide-react"

const SUPPORT_EMAIL = "goioeremob@gmail.com"

const dataSafetyCategories = [
  {
    icon: MapPin,
    title: "Localização",
    items: ["Localização aproximada", "Localização precisa"],
  },
  {
    icon: User,
    title: "Informações pessoais",
    items: [
      "Nome",
      "E-mail",
      "IDs de usuário",
      "Endereço",
      "Número de telefone",
    ],
  },
  {
    icon: MessageSquare,
    title: "Comunicação",
    items: ["Mensagens no app"],
  },
  {
    icon: Activity,
    title: "Diagnósticos",
    items: ["Diagnósticos de desempenho", "Logs de erro"],
  },
  {
    icon: Smartphone,
    title: "Dispositivo",
    items: ["IDs do dispositivo"],
  },
]

export function DataPrivacySection() {
  return (
    <section id="privacidade" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
            <Shield className="h-3.5 w-3.5 text-accent" />
            Compliance e Segurança
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Segurança e Privacidade dos Dados
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Transparência unificada sobre o tratamento de dados do aplicativo{" "}
            <span className="font-medium text-foreground">Goio Mob — Motorista</span>,
            em conformidade com as exigências da{" "}
            <span className="font-medium text-foreground">Google Play Store</span> (Android) e da{" "}
            <span className="font-medium text-foreground">Apple App Store</span> (iOS).
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-foreground">
              Práticas de Segurança
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Para garantir a proteção dos motoristas, todos os dados são criptografados em
              trânsito e transferidos exclusivamente através de conexões seguras (HTTPS), tanto
              no Android quanto no iOS.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-foreground">
              Direito à Exclusão
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              O usuário pode, a qualquer momento, solicitar a exclusão definitiva de sua conta e
              de todos os dados armazenados, conforme exigido pela Google Play e pela App Store.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Solicitação de exclusão de conta - Goio Mob Motorista&body=Olá, gostaria de solicitar a exclusão definitiva da minha conta e de todos os meus dados armazenados no aplicativo Goio Mob - Motorista.%0A%0APlataforma (Android/iOS):%0ANome completo:%0AE-mail cadastrado no app:%0ATelefone:%0A`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Solicitar exclusão por e-mail
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              Envie sua solicitação para{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>
              . Responderemos em até 30 dias.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-secondary p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
            <Fingerprint className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-secondary-foreground">
            Identificadores e Rastreamento (Apple App Store)
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Identificadores de dispositivo podem ser utilizados para otimização do aplicativo e
            análise de uso, em parceria com serviços de tecnologia parceiros. Esses dados são
            tratados de forma segura e servem exclusivamente para melhorar a estabilidade,
            desempenho e experiência do motorista no Goio Mob — Motorista.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-secondary p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Link2 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-foreground">
              Dados Vinculados à Identidade
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Informações de Contato (nome, e-mail, telefone), Informações Pessoais (endereço,
              IDs de usuário) e Mensagens no app são estritamente vinculados à conta do motorista
              para autenticação, comunicação operacional e execução das corridas. Esses dados
              permitem identificar o usuário e são necessários para o funcionamento do serviço
              em ambas as plataformas.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                "Nome, e-mail e número de telefone",
                "Endereço e IDs de usuário",
                "Mensagens trocadas no aplicativo",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-secondary p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Unlink className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-secondary-foreground">
              Dados Não Vinculados
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Dados técnicos de telemetria, diagnósticos de desempenho, logs de erro e
              localização são processados de forma segura. Quando utilizados para fins
              estatísticos de melhoria de rotas e desempenho do app, não são vinculados
              diretamente à identidade civil do usuário, em linha com as práticas de privacidade
              da Apple e com o Data Safety da Google.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                "Diagnósticos de desempenho e logs de erro",
                "Telemetria técnica do dispositivo",
                "Localização agregada para estatísticas de rotas",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-secondary p-8 lg:p-10">
          <h3 className="text-lg font-semibold text-secondary-foreground">
            Resumo de Dados Coletados e Compartilhados (Google Play — Data Safety)
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Declaração consolidada dos tipos de dados tratados pelo Goio Mob — Motorista,
            alinhada ao formulário Data Safety da Google Play e às categorias de privacidade da
            App Store:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataSafetyCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <category.icon className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground">{category.title}</h4>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
