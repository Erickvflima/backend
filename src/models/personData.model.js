function getList() {
  try {
    const response = {
      status: "success",
      message: "Lista baixada",
      document: [
        {
          name: "Erick Lima",
          email: "as@gmail.com",
          nascimento: "04/02/1995",
          telefone: "(31)98467-5300",
        },
        {
          name: "Marcela Lima",
          email: "Marcel@gmail.com",
          nascimento: "04/02/1999",
          telefone: "(31)98467-1212",
        },
      ],
    };
    return response;
  } catch (err) {
    console.error(err);
  }
}

module.exports = getList;
