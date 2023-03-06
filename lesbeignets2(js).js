function recette(){
var a=document.getElementById("myRange").value;
var fa= 92*2*a;
var s=17*2*a;
var oeuf=0.5*2*a;
var beu=8.5*2*a;
var lé=3.25*2*a;
var trois=1.25+0.5*a;

document.getElementById("tableau").innerHTML=' <table>'+
    '<thead>'+
        '<tr>'+
          '<th colspan="2">    Ingrédients   </th>'+
 '</tr>'+
    '</thead>'+
    '<tbody>'+
        '<tr>'+
            '<td>'+fa+'  </td>'+
            '<td>  de farine</td>'+
        '</tr>'+
      '<tr>'+
            '<td>'+s+'  </td>'+
            '<td>  de sucre glace</td>'+
        '</tr>'+
    '<tr>'+
      '<td>'+oeuf+'  </td>'+
      '<td>  d\'oeuf</td>'+
      '</tr>'+
      '<tr>'+
      '<td>'+beu+'  </td>'+
      '<td>  de beurre</td>'+
      '</tr>'+
      '<tr>'+
      '<td>'+lé+'  </td>'+
      '<td>  de lait</td>'+
 '</tr>'+
      '<tr>'+
      '<td>'+trois+'  </td>'+
      '<td>  de levure</td>'+
'</tr>'+
      '<tr>'+
      '<td>'+trois+'  </td>'+
      '<td>  de sel</td>'+
'</tr>'+
      '<tr>'+
      '<td>'+trois+'  </td>'+
      '<td>  de sucre vanillé</td>'+
      '</tr>'+
 
  '</tbody>'

}




