async function finditens (id) {
    const response = await fetch(
      "https://jsonservercadas.gilhermetheodor.repl.co/itens/" + id,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "/",
          Host: "Gagsta",
        },
      }
    );
    const itens  = await response.json();
    return itens ;
  }
  