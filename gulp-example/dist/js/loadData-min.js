function buildHtmlTable(t){console.log(t);let e="<table>";for(let a=0;a<t.length;a++)e+="<tr><td>"+t[a].id+"</td><td>"+t[a].name+"</td><td>"+t[a].sirname+"</td><td>"+t[a].email+"</td></tr>";return e+="</table>"}let data="";fetch("data/data.json").then(t=>t.json()).then(t=>data=t).then(t=>document.getElementById("dataTable").innerHTML=buildHtmlTable(t)).catch(t=>console.log(t));