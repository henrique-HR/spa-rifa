import home from "./pages/home/home.js"
import sorteio from "./pages/sorteio/sorteio.js"

 const main = window.document.querySelector("#root")

 function content()
  {
                main.innerHTML=''

                const  hash = window.location.hash
                const hashtml = `${hash}.html`
                if(hash  ==='#home'){
                        main.append(home())
                        
                }else if (hash ==='#sorteio'){
                        main.appendChild(sorteio())
                }
}
function  init(){
        window.addEventListener('hashchange', e => content(e))
}


window.addEventListener('load',()=>{
        main.appendChild(home())
        init()
        
})

/*class spa{
        constructor(){
                window.addEventListener('hashchange',event => this.hashchange(event)
                )
                this.root = document.querySelector('#root')
        }
        hashchange(event){
                const hash = window.location.hash
                console.log(event)
                this.loadcontent(hash)
        }
        loadcontent(uri){
                const urluri= `${uri}.html`;
                fetch(urluri).then(e => e.text()).then(conteudo => this.subirconteudo(conteudo))
        }
        subirconteudo(conteudo){
                this.root.innerHTML = conteudo
        }

}
        
new spa()*/