document.getElementById('jsonBtn').addEventListener('click', cargarJSON);


function cargarJSON() {
  fetch('datos.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let html;
      data.innerHTML = '';
      data.forEach(function (precios){
        html += `<tr>
                 <th> ${precios.id}</th> 
                 <th>${precios.ciudad}</th> 
                 <th> ${precios.precio_gasolina}</th> 
                 <th>${precios.precio_acpm}</th>
                 </tr>`;
      })
      document.getElementById('table-now').innerHTML = html;
    })
}


