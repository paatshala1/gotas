window.addEventListener("load", comenzar);

var dropGrowth, dropSize, dropping;
var times, counter;
var secondDrop;

function comenzar() {
    counter = 0;
    times = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reps'));
    dropGrowth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dropScaleEnd'));
    secondDrop = document.querySelector('#circulo2');
    dropping = setInterval(dropResizing, 1990);
}


function dropResizing() {   
   
    if(counter == times) {

        clearInterval(dropping);

    } else {

        dropSize = parseFloat(getComputedStyle(secondDrop).width);
        dropSize *= dropGrowth;
        secondDrop.style.width = `${dropSize}px`;
        secondDrop.style.height = `${dropSize}px`;
        
        // document.documentElement.style.setProperty('--dropSizeIni', dropScaleIni.toString());
        // document.documentElement.style.setProperty('--dropSizeEnd', dropScaleEnd.toString());
        // alert(`Ini: ${dropScaleIni}\nGrowth: ${dropGrowth}\nEnd: ${dropScaleEnd}`);
        counter += 1;
    
    }
}
