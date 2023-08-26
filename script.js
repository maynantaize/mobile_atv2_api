/* api cep */
function consultarCEP() {
    const cep = document.getElementById('cepInput').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cep').textContent = data.cep;
            document.getElementById('logradouro').textContent = data.logradouro;
            document.getElementById('bairro').textContent = data.bairro;
            document.getElementById('cidade').textContent = data.localidade;
            document.getElementById('estado').textContent = data.uf;
        })
        .catch(error => {
            console.error('Erro ao consultar o CEP:', error);
            alert('CEP não encontrado. Verifique o CEP informado.');
        });
}

document.getElementById('consultButton').addEventListener('click', consultarCEP);

/* api ddd */
function consultarDDD() {
    const ddd = document.getElementById('dddInput').value;
    const url = `https://api-ddd.v6.no/api/ddds/${ddd}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ddd').textContent = data.ddd;
            document.getElementById('estado').textContent = data.estado;
        })
        .catch(error => {
            console.error('Erro ao consultar o DDD:', error);
            alert('DDD não encontrado. Verifique o DDD informado.');
        });
}

document.getElementById('consultButton').addEventListener('click', consultarDDD);

/* api piada */
document.getElementById('consultButton').addEventListener('click', obterPiada);

function obterPiada() {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            const piadaDiv = document.getElementById('piada');
            piadaDiv.innerHTML = `<p class="lead">${data.joke}</p>`;
        })
        .catch(error => {
            console.error('Erro ao obter piada:', error);
        });
}