const readline = require('readline/promises');
const Auditorio = require('./classes/Auditorio');
const AuditorioCrud = require('./classes/AuditorioCrud');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  const resposta = await rl.question(
    'Escolha uma ação (criar, deletar, alterar, consultar): '
  );

  switch (resposta) {
    case 'criar':
      const nome = await rl.question('Nome do auditório: ');
      const descricao = await rl.question('Descrição do auditório: ');
      const qtdPessoasSuportadas = await rl.question(
        'Quantidade de pessoas suportado: '
      );
      const novoAuditorio = new Auditorio(
        nome,
        descricao,
        qtdPessoasSuportadas
      );
      const auditorioCrud = new AuditorioCrud();
      auditorioCrud.writeAuditorios(novoAuditorio);

      console.log('Auditório criado com sucesso.');
      rl.close();
      break;

    case 'deletar': {
      const nome = await rl.question('Nome do auditório a deletar: ');
      const auditorioCrud = new AuditorioCrud();
      auditorioCrud.deleteAuditorio(nome);
      rl.close();
      break;
    }
    case 'consultar': {
      const palavra = await rl.question(
        'Qual auditorio você deseja consultar: '
      );

      const auditorioCrud = new AuditorioCrud();
      auditorioCrud.showAuditorios(palavra);
      rl.close();
      break;
    }
    default:
      console.log('Ação não reconhecida.');
      rl.close();
  }
}

run();
