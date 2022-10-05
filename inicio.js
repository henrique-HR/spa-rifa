import home from "./pages/home/home.js"
import sorteio from "./pages/sorteio/sorteio.js"
import lista  from "./lista/nomes.js"
 const main = window.document.querySelector("#root")
const init = ()=>{
        
        window.addEventListener('hashchange',()=>{
                main.innerHTML=''
        if(window.location.hash=== '#home'){
                main.appendChild(home())
                
        }else if (location.hash==='#sorteio'){
                main.appendChild(sorteio())
        }
})
}

window.addEventListener('load',()=>{
        main.innerHTML = lista()[1].nome +' '+ lista()[1].telefone
        
        init()
        
})
