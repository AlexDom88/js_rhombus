
let space = 30;
let star = 1;
let line = 30;
for (let i = 0; i <= line; i++){
    for (let j = 0; j <= space; j++){
        document.write("&nbsp")
    }
    for (let k = 0; k < star; k++){
        document.write("$")
    }
    space--;
    star++;
    if (i >= line / 2 && i <= line)
    {
        star = star - 2;
        space = space + 2;
    }
    document.write("<br>");
}



//Елка и треугольник
// var n = "&nbsp";
// for (let i = 0; i < 6; i++) {
//   for (let k = 20; k > i - 1; k--) {
//     document.write(n, n)
//   }
//   for (let j = 0; j < i + 1; j++) {
//     document.write("*", n, n)
//   }
//   document.write("<br>")
// }
// for (let i = 0; i < 8; i++) {
//     for (let k = 20; k > i - 1; k--) {
//       document.write(n, n)
//     }
//     for (let j = 0; j < i + 1; j++) {
//       document.write("*", n, n)
//     }
//     document.write("<br>")
//   }
// for (let i = 0; i < 12; i++) {
//     for (let k = 20; k > i - 1; k--) {
//       document.write(n, n)
//     }
//     for (let j = 0; j < i + 1; j++) {
//       document.write("*", n, n)
//     }
//     document.write("<br>")
//   }

  