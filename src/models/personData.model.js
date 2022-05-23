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
        {
          name: "Rosely Lima",
          email: "Rosely@gmail.com",
          nascimento: "04/02/1988",
          telefone: "(31)98467-3333",
        },
        {
          name: "Willian Lima",
          email: "Willian@gmail.com",
          nascimento: "04/02/2000",
          telefone: "(31)98467-1111",
        },
        {
          name: "Carlos Santos",
          email: "Carlos@gmail.com",
          nascimento: "04/02/2003",
          telefone: "(31)98467-9999",
        },
      ],
    };
    return response;
  } catch (err) {
    console.error(err);
  }
}

module.exports = getList;
