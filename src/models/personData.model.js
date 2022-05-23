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

module.exports = { getList, postList };
