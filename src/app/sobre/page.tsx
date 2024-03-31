import { Containermd } from "@/components/Containers";
import Link from "next/link";

function calcularIdade(dataNascimento: string): number {
    const [dia, mes, ano] = dataNascimento.split("/").map(Number);
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1; // Os meses em JavaScript começam do 0
    const diaAtual = dataAtual.getDate();
    let idade = anoAtual - ano;
    // Se o mês atual for menor que o mês de nascimento, subtraia um ano da idade
    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
      idade--;
    }
  
    return idade;
}

const Page: React.FC = () => {
    return (
        <div>
            <Containermd className="mt-10" >
                <div className="bg-slate-600 px-10 py-5 rounded-md font-['Montserrat',sans-serif]" >
                    <h3 className="text-3xl my-3.5" >Sobre mim:</h3>
                    <p>Olá a quem estiver acessando a minha página, meu nome é Pablo eu tenho {calcularIdade("05/04/2003")} anos.</p>
                    <p>Com aproximadamente 14 anos eu entrei no mundo da tecnologia, desmontando pc&apos;s, e buscando mais e mais conhecimento na área.</p>
                    <p>Até que aos 16 anos aproximadamente, eu por iniciativa de um amigo da escola inciei um curso tecnico de desenvolvimento de sistemas pela <a rel="noopener noreferrer" target="_blank" href="http://www.etecdearacatuba.com.br/pagina/" >ETEC de Araçatuba</a>.</p>
                    <p></p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                        vitae ad quidem minima nam quaerat placeat, officiis
                        excepturi ea reprehenderit? Maxime eos cum sapiente error,
                        aspernatur praesentium nesciunt similique iste.
                    </p>
                </div>
            </Containermd>
        </div>
    );
};

export default Page;
