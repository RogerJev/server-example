
function add(x1:number, x2:number): number{
    return x1 + x2;
}

function substract(x1:number,x2:number): number {
    return x1 - x2;
}

function multiply(x1:number, x2:number): number {
    return x1 * x2;
}

export function divide(x1: number, x2:number): number | void {
    if(x2 == 0) {
        console.log("No se puede dividir entre 0");
    } else {
        return x1 / x2;
    }
    
}

export{add,substract}