import { produtoServices } from "../servicos/produto-servicos.js";

const novoProduto = (imageUrl, name, price) => {
    const card = document.createElement('div')
    const conteudo = `
    <div class="produtos__holder">
        <img src="${imageUrl}" alt="">
        <p class="descricao">${name}</p>
        <p class="preco">${price}</p>
        <a href="mostrarProduto.html">Ver produto</a>
    </div>`
    card.innerHTML = conteudo
    return card

}

const produtos = document.querySelector("[data-produto]")



const render = async () => {
    try {
        const listaProdu = await produtoServices.listaProdutos()
        listaProdu.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.imageUrl, elemento.name, elemento.price))
           
            
        })
    } catch (error) {
        console.log(error)
    }
}
render()
