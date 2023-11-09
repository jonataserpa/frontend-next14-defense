import { IDefenseProps } from "@/app/(services)/(routes)/services/interfaces/iDefense.interface";
import CardList from "./CardList";

type HomeProps = {
  rows: IDefenseProps[];
};

const HomePage = ({ rows }: HomeProps) => {

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Painel de Serviço - Listagem
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          A Defensoria do Estado do Rio Grande do Sul
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {rows && rows.length === 0 && (
          <div className="text-muted-foreground font-light text-sm md:text-lg text-center">
            <strong>Carregando serviços...</strong>
          </div>
        )}

        {rows.map((tool) => (
          <CardList key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
