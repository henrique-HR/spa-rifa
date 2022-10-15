
export default()=>{ 
const container = document.createElement('div')

const template = `<div class="imagen">
            
</div>
<div id="vamos">
    
    <h1 id="id">vamos lá !!!</h1>
    
</div>
<table id="sorteados">
 <th>nome</th><th>nº</th> 
 <th>telefone</th>
 <th>premio</th>
<tr>
    <td class="ganhador">boa</td>
    <td class="no">sorte</td>
    <td class="tel">a</td>
    <td class="premio">todos</td>
</tr>
<tr>
    <td class="ganhador">boa</td>
    <td class="no">sorte</td>
    <td class="tel">a</td>
    <td class="premio">todos</td>
</tr>
<tr>
    <td class="ganhador">boa</td>
    <td class="no">sorte</td>
    <td class="tel">a</td>
    <td class="premio">todos</td>
</tr> 
<tr>
    <td class="ganhador">boa</td>
    <td class="no">sorte</td>
    <td class="tel">a</td>
    <td class="premio">todos</td>
</tr>
<tr>
    <td class="ganhador">boa</td>
    <td class="no">sorte</td>
    <td class="tel">a</td>
    <td class="premio">todos</td>
</tr>
<tr>
    <td class="ganhador">boa</td>
    <td class="no">sorte</td>
    <td class="tel">a</td>
    <td class="premio">todos</td>
</tr>
</table>

<div id="btnsorte"> 
    <input type="button" value="embaralhar" onclick="sortear()">
    <input type="button" value="sortear" onclick="parar()">
</div> `
container.innerHTML = template

return container

}