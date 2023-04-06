
var regex= /^$/; //inicia y finaliza
regex= /^\D+\s*$/; //condicion para que el texto no tenga numeros y pueda trer espacios
regex= /^[a-zA-Z]$/; //esto permite alfanumerics pero s le colocas el $ ya te limitaa solo letras
regex = /^\d+$/; // esto permite analizar el texto de principio a fin y validar qe solo traiga digitos numericos si le quitas el dolar  ya quedaria libre pero debe comenza con digitos 
regex = /^[a-zA-Z0-9_ -]+$/; //los corchetes puedes colocar los caracteres que estan permitidos
regex= /^\w$/ //esto permie cualquier letra pero solo 1 letra
regex = /^\w+$/ //de esta manera ya va a permitir minimo cualquier letra minimo 1 sola vez o infinito
regex = /^\w*\s+\w+$/ // de esta manera puede permitir que empiece con cualquier alfanumerico pudiendo o no estar 0 a infinito y le siga  un espacio minimo o mas y que le siga 
                        //minimo una letra que puede ser alfanumerica. pero todo esto solo una vez si quieres hacerlo recuersiva es lo siguiente
regex = /^[\w\s]*$/ // este permit que sea recursivo lo antes mencionado es decir que se analiza el patron por cada caracter peri si colocas un - se jodio porque ese caracter no es alfanumerico


regex= /^(\w|\s)+(cerveza|vino)$/;

const text ="A francisco le gusta el dorito";
if (regex.test(text)) {
    console.log("Es Correcto");
} else {
    console.log("Es Incorrecto");
}

