import CadastroProfessor1781432412011 from "./CadastrarProfessor1781432412011"
import CadastroDisciplina1781432412011 from "./CadastrarProfessor1781432412011"
import CadastroCurso1781432412011 from "./CadastrarProfessor1781432412011"

function ScreenRender1781432412011() {
   
   const telasCadastro = new Map([
    ["professor", CadastroProfessor1781432412011],
    ["disciplina", CadastroDisciplina1781432412011],
    ["curso", CadastroCurso1781432412011],
  ]);
    return (
      <>
       <h1>ScreenRender</h1>
      </>
    );
  }
  
  export default ScreenRender1781432412011;
  