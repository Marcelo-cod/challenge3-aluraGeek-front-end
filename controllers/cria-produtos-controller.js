import { produtoServices } from "../servicos/produto-servicos.js";

const form = document.querySelector("[data-form]")

form.addEventListener("submit", (evento) => {
     evento.preventDefault()

     const imageUrl = document.querySelector("[data-url]").value

     const name = document.querySelector("[data-nome]").value

     const price = document.querySelector("[data-price]").value

     produtoServices.criaProduto(imageUrl, name, price).then(resposta => {
         window.location.pathname = "/todosProdutos.html"
         console.log(resposta)

     }).catch (err => {
         console.log(err)
     })
 })