// 1. Faça um fetch da API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Converte a resposta recebida para o formato JSON
    return response.json();
  })
  .then(users => {
    // 2. Mostre todos os dados no console
    console.log("--- Todos os dados dos usuários ---");
    console.log(users);

    // 3. Mostre apenas o 'name' do primeiro usuário
    // O primeiro elemento de um array fica no índice 0
    console.log("\n--- Nome do primeiro usuário ---");
    console.log(users[0].name);

    // 4. Mostre o 'email' do segundo usuário
    // O segundo elemento de um array fica no índice 1
    console.log("\n--- Email do segundo usuário ---");
    console.log(users[1].email);
  })
  .catch(error => {
    // Tratamento básico de erros caso a requisição falhe
    console.error('Erro ao buscar os dados:', error);
  });