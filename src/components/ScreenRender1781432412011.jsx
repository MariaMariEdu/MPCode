import CadastroProfessor1781432412011 from "./CadastrarProfessor1781432412011"
import CadastroDisciplina1781432412011 from "./CadastrarProfessor1781432412011"
import CadastroCurso1781432412011 from "./CadastrarProfessor1781432412011"

function ScreenRender1781432412011({ tela }) {

  const telasCadastro = new Map([
    ["professor", CadastroProfessor1781432412011],
    ["disciplina", CadastroDisciplina1781432412011],
    ["curso", CadastroCurso1781432412011],
  ]);
  const renderTela = () => {
    return telasCadastro.get(tela)();
 
  }

  return (
    <>
     {renderTela()}
    </>
  );
}

export default ScreenRender1781432412011;
