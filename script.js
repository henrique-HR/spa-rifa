let set 
const escolher=()=>{ 
  
  var ganhador = window.document.querySelectorAll('.ganhador')
  var teu = window.document.querySelectorAll('.tel')  
  var pre = window.document.querySelectorAll('.premio')
  var num = window.document.querySelectorAll('.no')

  var con1=[]
  
  const  participante =
    [
    {   
        numero:1,
        nome:"ana paula ",
        telefone:'****1295'
    },{  
        numero:2,
        nome:'samara' ,
        telefone:'****2959'
    },{
        numero:5,
        nome:'mirian' ,
        telefone: '****6337'
    },{
        numero:6,
        nome:'penha ' ,
        telefone:'****2776'
    },{
        numero:9,
        nome:'ana lucia ' ,
        telefone:'****1759'
    },{
        numero:10,
        nome:'juliana ' ,
        telefone:'****7408'
    },{
        numero:11,
        nome:'juliana ' ,
        telefone:'****7408'
    },{
        numero:13,
        nome:'eduardo' ,
        telefone:'****1260'
    },{
        numero:17,
        nome:'betania' ,
        telefone:'****5055'
    },{
        numero:18,
        nome:'ana deyse' ,
        telefone:'****9144'
    },{
        numero:20,
        nome:'betania' ,
        telefone:'****5055'
    },{
        numero:22,
        nome:'renan',
        telefone:'****0854'
    },{
        numero:23,
        nome:'vilmara' ,
        telefone:'****0345'
    },{
        numero:25,
        nome:'juliana' ,
        telefone:'****7408'
    },{
        numero:27,
        nome:'elisangela' ,
        telefone:'****6057'
    },{
        numero:36,
        nome:'caua',
        telefone:'****4582'
    },{
        numero:56,
        nome:'elita' ,
        telefone:'****7299'
    },{
        numero:66,
        nome:'cleide' ,
        telefone:'****1102'
    },{
        numero:100,
        nome:'ana carla',
        telefone:'****6218'
    }
]

  var premio =  ['combo 2 pizzas + refri','aplicaçao de unha em gel ','combo galeto + feijoada ','conjunto de roupa fit (F)','combo x-tudo + batata + refri(250 ml','pix R$ 50,00']
  var i=0,j=0,igual,vetor=[]

  
  do{
        vetor[i]= Math.floor(Math.random()*18)

        igual=0

        for( j=0; j<i ;j++){
            if(vetor[j]==vetor[i]){
              igual=1
            }
        }if(igual==0){
          i++
         
      }
        
  }while( i <6 )

 for(i=0;i<6;i++){
    
    con1[i]=vetor[i]
    
    ganhador[i].innerHTML =`<strong>${i+1}º</strong> ${participante[con1[i]].nome}`
    teu[i].innerHTML = ` ${participante[con1[i]].telefone} `
    num[i].innerHTML = `${participante[con1[i]].numero}`
    pre[i].innerHTML = `${premio[i]}`
  }
  
 
  
}
const sortear =()=>{

 set = setInterval(escolher,100)

}
const parar = ()=>{
  clearInterval(set)
}






