//função para montar os cartões
function montarPainel() {

    // mapeando o painel de tarefas do DOM 
    let painelTarefa = document.querySelector('#painelTarefas');
    painelTarefas.innerHTML = '';

    //Espera o resultado da função listarTarefas
    let promise = listarTarefas("");
    promise
        //Caso o resultado seja processado
        .then(function (response) {
            //console.log(response);

            response.forEach(function (item) {
                //criando cartão
                let cartao = document.createElement('div');
                cartao.className = 'card';
                cartao.innerHTML = `    
                    <div class="card-body">
                    <div>
                        <span class="card-subtitle mb-2 text-muted">${item.data}</span>
                    </div>
                    <p class="card-text">${item.descricao}</p>
                    </div>
                `;
                //
                painelTarefas.appendChild(cartao);

            });
        })

        //Caso o resultado não seja processado 
        .catch(function (error) {
            console.log(error);
        });

}