//GET
const listaProdutos = () => fetch ("http://localhost:3000/produto").then(resposta => resposta.json())


//POST

const criaProduto = (imageUrl, name, price) =>{
    return fetch ("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price
        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error("Não foi possível criar o produto")
    })
}
export const produtoServices = {
    listaProdutos,
    criaProduto,
    
} 