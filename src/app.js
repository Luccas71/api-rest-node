import express from 'express';

const app = express()

app.use(express.json())


// mock => base de dados para testar 
const selecoes = [
    { id: 1, selecao: "Brasil", grupo: "G"},
    { id: 2, selecao: "Suíça", grupo: "G"},
    { id: 3, selecao: "Camarões", grupo: "G"},
    { id: 4, selecao: "Sérvia", grupo: "G"}
]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id) 
}
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

app.get('/', (req, res) => {
    res.send('Curso Node JS');
})

app.get('/selecoes/:id', (req, res) => {
    res.json(buscarSelecaoPorId(req.params.id))
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
})

app.post('/selecoes', (req, res) => {
    selecoes.push(req.body);
    res.status(201).send("Seleção cadastrada com sucesso!")
})

app.delete('/selecoes/:id', (req, res) => {
    const index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)

    res.send("Seleção deletada com sucesso!")
})

export default app; 
