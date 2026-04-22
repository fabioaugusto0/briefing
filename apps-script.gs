// Google Apps Script — Cole este código em script.google.com
// Substitua SPREADSHEET_ID pelo ID da sua planilha Google Sheets

const SHEET_NAME = "Briefings";
const SPREADSHEET_ID = "1XBlIfW8oL_AyfokabQITNl6UwMzkMOIB0sa4SQZmCF8";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    const data = JSON.parse(e.postData.contents);

    // Cabeçalhos na primeira linha
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data/Hora",
        // Seção 1
        "Nome do Negócio",
        "Nicho / Segmento",
        "Missão",
        "História do Negócio",
        "Valores",
        "Diferenciais",
        // Seção 2
        "Produtos e Serviços",
        "Principal Oferta",
        "Ticket Médio",
        "Forma de Venda",
        // Seção 3
        "Descrição do Cliente Ideal",
        "Faixa Etária",
        "Principais Dores",
        "Desejos e Sonhos",
        "Objeções Comuns",
        // Seção 4
        "Como Quer Ser Percebido",
        "Concorrentes Diretos",
        "O Que NÃO Quer Transmitir",
        "Diferenciais vs Concorrentes",
        // Seção 5
        "Adjetivos da Marca",
        "Nível de Linguagem",
        "Tom de Comunicação",
        "Exemplo de Texto Aprovado",
        // Seção 6
        "Criadores que Admira",
        "Marcas Referência",
        "Estética Visual Desejada",
        "O Que NÃO Gosta Visualmente",
        // Seção 7
        "Objetivo Principal de Conteúdo",
        "Meta Numérica",
        "Plataformas Prioritárias",
        "Frequência Desejada de Postagem",
        // Seção 8
        "O Que Já Foi Feito",
        "O Que Funcionou",
        "O Que NÃO Funcionou",
        "Motivo do Que Não Funcionou",
        // Seção 9
        "Locações Disponíveis",
        "Pessoas Envolvidas na Produção",
        "Disponibilidade de Agenda",
        "Processo de Aprovação",
        // Seção 10
        "Instagram",
        "TikTok",
        "YouTube",
        "LinkedIn",
        "Site / Link Externo",
        "Contato Principal",
        "Canal de Comunicação Preferido",
        "Observações Finais"
      ]);
    }

    sheet.appendRow([
      new Date().toLocaleString("pt-BR"),
      // Seção 1
      data.nomeNegocio || "",
      data.nicho || "",
      data.missao || "",
      data.historia || "",
      data.valores || "",
      data.diferenciais || "",
      // Seção 2
      data.produtosServicos || "",
      data.principalOferta || "",
      data.ticketMedio || "",
      data.formaVenda || "",
      // Seção 3
      data.clienteIdeal || "",
      data.faixaEtaria || "",
      data.dores || "",
      data.desejos || "",
      data.objecoes || "",
      // Seção 4
      data.comoQuerSerPercebido || "",
      data.concorrentes || "",
      data.naoQuerTransmitir || "",
      data.diferenciaisVsConcorrentes || "",
      // Seção 5
      data.adjetivosMarca || "",
      data.nivelLinguagem || "",
      data.tomComunicacao || "",
      data.exemploTexto || "",
      // Seção 6
      data.criadoresAdmira || "",
      data.marcasReferencia || "",
      data.esteticaDesejada || "",
      data.naoGostaVisualmente || "",
      // Seção 7
      data.objetivoPrincipal || "",
      data.metaNumerica || "",
      data.plataformas || "",
      data.frequenciaPostagem || "",
      // Seção 8
      data.oQueFoiFeito || "",
      data.oQueFuncionou || "",
      data.oQueNaoFuncionou || "",
      data.motivoNaoFuncionou || "",
      // Seção 9
      data.locacoes || "",
      data.pessoasEnvolvidas || "",
      data.disponibilidade || "",
      data.processoAprovacao || "",
      // Seção 10
      data.instagram || "",
      data.tiktok || "",
      data.youtube || "",
      data.linkedin || "",
      data.site || "",
      data.contatoPrincipal || "",
      data.canalComunicacao || "",
      data.observacoes || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
