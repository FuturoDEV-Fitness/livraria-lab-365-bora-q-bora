const fs = require('fs');

class AuditorioCrud {
  constructor() {
    this.filePath = './src/files/auditorios.json';
  }

  readAuditorios() {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }
    const data = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  showAuditorios(palavra) {
    const auditorios = this.readAuditorios();
    const auditoriosFiltrados = auditorios.find(
      (auditorio) => auditorio.nome === palavra
    );
    if (auditoriosFiltrados) {
      console.log(auditoriosFiltrados);
    } else {
      console.log('Nenhum auditorio encontrado');
    }
  }

  writeAuditorios(auditorio) {
    const auditorios = this.readAuditorios();
    auditorios.push({
      codigo: auditorio.getCodigo,
      nome: auditorio.getNome,
      descricao: auditorio.getDescricao,
      qtdPessoasSuportadas: auditorio.getQtdPessoasSuportadas,
    });
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(auditorios, null, 2),
      'utf-8'
    );
  }

  deleteAuditorio(nome) {
    let auditorios = this.readAuditorios();
    const initialLength = auditorios.length;
    auditorios = auditorios.filter((auditorio) => auditorio.nome !== nome);

    if (auditorios.length === initialLength) {
      console.log(`Auditório com o nome "${nome}" não encontrado.`);
      return;
    }

    fs.writeFileSync(
      this.filePath,
      JSON.stringify(auditorios, null, 2),
      'utf-8'
    );
    console.log(`Auditório "${nome}" deletado com sucesso.`);
  }
}

module.exports = AuditorioCrud;
