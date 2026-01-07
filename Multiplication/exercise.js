let output;

output = "<table border='1 solid black' cellspacing='1' cellpadding='3'>";

for (let i = 2; i < 10; i++){
    output = output + "<tr>"
    for(let j = 1; j < 10; j++ ){
        output = output + "<td>" + i +"x" + j + " = " + i*j + "</td>";
    }
    output = output + "</tr>";
}
output = output + "</table>";

document.write(output);