fs = require("fs");
personDataJson = require("../../personData.json");

function getList() {
  try {
    const response = {
      status: "success",
      message: "Lista baixada",
      document: [personDataJson],
    };
    return response;
  } catch (err) {
    console.error(err);
  }
}

function getChanel() {
  try {
    const response = {
      status: "success",
      message: "Lista baixada",
      document: [
        {
          Id: "RED",
          IdSup: "RED",
          IdTopo: "RED",
          IdVirtual: null,
          Cor: "#4571ff",
          Switches: [
            {
              Id: "CTRS-1",
              Descricao: "LINHA EXTERNA 1",
              Origem: null,
              Ordem: null,
            },
            {
              Id: "CTRS-2",
              Descricao: "LINHA EXTERNA 2",
              Origem: null,
              Ordem: null,
            },
            {
              Id: "CTRS-3",
              Descricao: "LINHA EXTERNA 3",
              Origem: null,
              Ordem: null,
            },
            {
              Id: "CTRS-4",
              Descricao: "LINHA EXTERNA 4",
              Origem: null,
              Ordem: null,
            },
            {
              Id: "RSW-2",
              Descricao: "EXTENSÃO DA MESA (AUXILIAR 2)",
              Origem: null,
              Ordem: null,
            },
            {
              Id: "RSW-1",
              Descricao: "EXTENSÃO DA MESA (AUXILIAR 1)",
              Origem: null,
              Ordem: null,
            },
            { Id: "BLACK", Descricao: "FADE", Origem: "RED", Ordem: "1" },
            { Id: "BLACKHD", Descricao: "FADE HD", Origem: "RED", Ordem: "1" },
            {
              Id: "SAT1",
              Descricao: "SINAL DA REDE",
              Origem: null,
              Ordem: "1",
            },
            { Id: "FADER1", Descricao: null, Origem: null, Ordem: "10" },
            {
              Id: "REDE1",
              Descricao: "SAT REDE (RECEPÇÃO PAULISTA)",
              Origem: "RED",
              Ordem: "2 SP",
            },
            {
              Id: "CTL-A SP",
              Descricao: "CTL-A SP",
              Origem: "RED",
              Ordem: "2 SP",
            },
            {
              Id: "CTRL12",
              Descricao: "BOM DIA BRASIL CORTE SÃO PAULO",
              Origem: "RED",
              Ordem: "2 SP",
            },
            { Id: "REDER1", Descricao: null, Origem: "RED", Ordem: "20" },
            { Id: "VCR-1", Descricao: "VT", Origem: null, Ordem: "4 VT" },
            { Id: "VCR-2", Descricao: "VT", Origem: null, Ordem: "4 VT" },
            { Id: "VCR-3", Descricao: "VT", Origem: null, Ordem: "4 VT" },
            { Id: "VCR-4", Descricao: "VT", Origem: null, Ordem: "4 VT" },
            { Id: "DSAT11", Descricao: null, Origem: "RED", Ordem: "5" },
            {
              Id: "TDELAY-1",
              Descricao: "TIME SHIFT 1",
              Origem: null,
              Ordem: "5",
            },
            {
              Id: "TDELAY-2",
              Descricao: "TIME SHIFT 2",
              Origem: null,
              Ordem: "5",
            },
            { Id: "EVENTOR1", Descricao: null, Origem: null, Ordem: "7" },
            { Id: "CTRL1", Descricao: null, Origem: "RED", Ordem: "7" },
            { Id: "CTL-4", Descricao: "CONTROLE 4", Origem: "RED", Ordem: "X" },
            { Id: "CTL-3", Descricao: "CONTROLE 3", Origem: "RED", Ordem: "X" },
            { Id: "CTL-2", Descricao: "CONTROLE 2", Origem: "RED", Ordem: "X" },
          ],
          Modalidades: [
            {
              Id: "CC",
              Descricao: "CHAMADA COMERCIALIZADA",
              Cor: "",
              Origem: "",
            },
            { Id: "FD", Descricao: "FADE", Cor: "", Origem: "" },
            { Id: "FI", Descricao: "FILLER", Cor: "", Origem: "" },
            { Id: "FL", Descricao: "FLASH", Cor: "", Origem: "" },
            { Id: "VH", Descricao: "VINHETA", Cor: "", Origem: "" },
            { Id: "NC", Descricao: "NAO CHEGOU", Cor: "#FF8C00", Origem: "" },
            { Id: "CH", Descricao: "CHAMADA", Cor: "#556B2F", Origem: "SUP" },
            { Id: "PT", Descricao: "COMERCIAL", Cor: "#FF1493", Origem: "SUP" },
            { Id: "OU", Descricao: "OUTROS", Cor: "#008000", Origem: "SUP" },
            { Id: "CA", Descricao: "CALHAU", Cor: "#008000", Origem: "SUP" },
            { Id: "CP", Descricao: "PARALELA", Cor: "#008000", Origem: "SUP" },
            { Id: "VP", Descricao: "provisório IBMS", Cor: "", Origem: "" },
          ],
          StatusEvento: [
            { Nome: "Não Chegou", Consulta: true, Cor: "#FF8C00" },
            { Nome: "Alteração", Consulta: true, Cor: "#FF0000" },
            { Nome: "Participação", Consulta: true, Cor: "#FFFF00" },
          ],
          Programas: null,
          ColunasDinamicas: [
            { Id: 1, Nome: "Capítulo" },
            { Id: 2, Nome: "Bloco de Gravação" },
            { Id: 3, Nome: "Segmento" },
            { Id: 4, Nome: "Código do Material" },
            { Id: 5, Nome: "Clientes" },
            { Id: 6, Nome: "Produtos" },
            { Id: 7, Nome: "Materiais" },
          ],
        },
      ],
    };
    return response;
  } catch (err) {
    console.error(err);
  }
}

function postList(body) {
  try {
    let data = JSON.stringify(body, null, 2);

    fs.writeFile("personData.json", data, (err) => {
      if (err) throw err;
      console.log("Data written to file");
    });

    console.log("escrito no arquivo");
    return body;
  } catch (err) {
    console.error(err);
    console.log("Error ao gerar arquivo");
  }
}

module.exports = { getList, postList, getChanel };
