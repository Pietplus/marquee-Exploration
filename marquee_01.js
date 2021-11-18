/* ABOUT:

This esoteric Program uses the vintage Tag "marquee" and passes special characters in it.
In every reload of the page several random arguments are passed trough the DOM to the marquee. 
(number,height,color,shadow and characters)

The goal of this Program is to get interesting patterns out of it wich are pleasing in a visual way.

If i think this project further, this could be an App where the user is able to control the parameters by sliders or buttons or other sources of input.

*/

function itemRoll() {
    console.time('Execution Time'); // Start of Tracking Execution time -> log to console.
    for(let i = 0; i < Math.floor(Math.random() * 2); i++) {

        //****************************/ DECLARATION START****************************************************************
        
        let marquee = document.createElement('marquee');

        let a = "/ _/";
        let b = "+- +-+";
        let c = "** *";
        let d = "||  ||";
        let e = "/+ /";
        let f = "-  ---";
        let g = ". ..";
        let h = "= ==";
        let i = '--__: :;   ;__--';
        let k = "∏  ∏∏  ∏";
        let j = "() {} ()";
        let m = "•   •   •   •";
        let n = ".* .* .* .*";
        let q = "°¨°¨°¨°";

        let arr = [a,b,c,d,e,f,g,h,i,k,j,m,n,q];
        let arr2 = [0,1,2,3,4,5,6,7,8,9,];


        // getting random items to add them later to the marqueeTag.

        let item = setTimeout(shuffleItem(arr)[Math.floor(Math.random()*arr.length)],3000);
        let item2 = shuffleItem(arr)[Math.floor(Math.random()*arr.length)];
        let item3 = shuffleItem(arr)[Math.floor(Math.random()*arr.length)];

        // random numbers for colors of the font:

        let color1 = Math.floor(Math.random() * 255);
        let color2 = Math.floor(Math.random() * 255);
        let color3 = Math.floor(Math.random() * 255);

        let colors = [color1, color2, color3];

        let hexa1 = Math.floor(Math.random() * 9999);
        let hexa2 = Math.floor(Math.random() * 9999);
        let hexa3 = Math.floor(Math.random() * 9999);

        let hexas = [hexa1,hexa2,hexa3];

        let swif1 = Math.floor(Math.random() * 100);
        let swif2 = Math.floor(Math.random() * 100);
        let swif3 = Math.floor(Math.random() * 100);

        let swifs = [swif1,swif2, swif3];

        let p1 = Math.floor(Math.random() * 40);
        let p2 = Math.floor(Math.random() * 100);
        let p3 = Math.floor(Math.random() * 10);
        let p4 = Math.floor(Math.random() * 10);
        let p5 = Math.floor(Math.random() * 10);
        let p6 = Math.floor(Math.random() * 90);

        let ps = [p1,p2,p3,p4,p5,p6];


        let dir = ["up","down","left","right"];

// ******************************DECLARATION END -> SHUFFLE START*************************************************

        // shuffle the ARRAYS by random!.
        function shuffleItem() {
            let currentIndex = arr.length,randomIndex;
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              // And swap it with the current element.
              [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
            }
            return arr;
          }

          // ******************************ShuffleEnd********************************

// Add the random Items to the marquee:
marquee.innerHTML = item + item2 + item3;
document.body.appendChild(marquee);

// DOM_STYLING:

marquee.setAttribute("scrollamount",`${p6}`);
marquee.setAttribute("direction",`right`);

marquee.style.color = `rgba(${color1},${color2},${color3},1)`;
marquee.style.textShadow = `${p2}px ${p2}px ${swif1}px #ff${hexa1}, ${p3}px ${p4}px ${swif2}px #ff${hexa2},${p4}px ${p5}px ${swif3}px #ff${hexa3}`;
marquee.style.lineHeight = `${p1}rem`;
marquee.style.fontSize = `${p2}rem`;

// marquee.style.border = `${p1}px solid #ff${hexa2}`;
// marque.style.textDecoration = underline;
     }
     console.timeEnd('Execution Time');     // End of Tracking Execution time -> log to console.
}

// End of FIRST FUNCTION: ItemRoll();

function rollIt(){
    for(let i = 0;i < Math.floor(Math.random() * 10);i++){
        let time = Math.floor(Math.random() * 2000);
            setTimeout(itemRoll(),`${time}`);
            setTimeout(itemRoll(),`${time}`);
            setTimeout(itemRoll(),`${time}`);
            setTimeout(itemRoll(),`${time}`);
    }
}

// End of SECOND FUNCTION: rollIt();

rollIt();  // Call this mess! :D

// END OF PROGRAMM****************************************************************************





/*  IDEA BOARD:

1.grab different marquees by id and change the speed! :o
2.if x (compareoperator) n : alternate the shooting direction.
*/




/* UNUSED CODE:

//   setTimeout(rollIt()){            TRY TO RELOAD THE FUNCTION OVER TIME
//     window.location.reload(1);
//  }, 5000);



let manyItems = Math.floor(Math.random() * 100);  UNUSED VARIABLE



   // function shuffleColors() {
          //   let currentIndex = colors.length,randomIndex;
          //   // While there remain elements to shuffle...
          //   while (currentIndex != 0) {
          //     // Pick a remaining element...
          //     randomIndex = Math.floor(Math.random() * currentIndex);
          //     currentIndex--;
          //     // And swap it with the current element.
          //     [colors[currentIndex], colors[randomIndex]] = [
          //       colors[randomIndex], colors[currentIndex]];
          //   }
          //   return colors;
          // }

          // function shuffleDir() {
          //   let currentIndex = dir.length,randomIndex;
          //   // While there remain elements to shuffle...
          //   while (currentIndex != 0) {
          //     // Pick a remaining element...
          //     randomIndex = Math.floor(Math.random() * currentIndex);
          //     currentIndex--;
          //     // And swap it with the current element.
          //     [dir[currentIndex], dir[randomIndex]] = [
          //       dir[randomIndex], dir[currentIndex]];
          //   }
          //   return dir;
          // }



*/ 


