let bloques= 3;
const numeros = [7,8,3,4,5,1,2,6,9];


const blok = (b)=> {
    if (b == 2){
        b=numeros.slice(0,4)
        c=numeros.slice(5,9)
        console.log(f=`La respuesta al arreglo es: ${b.sort()}  ${c.sort()}`);
        b.push(0);
        c= b.concat(c);
        console.log(e= b.concat(c));
    return c
    }
    if (b == 3){
        b=numeros.slice(0,3);
        c=numeros.slice(3,6);
        d=numeros.slice(6,9);
        console.log(`La respuesta al arreglo es: ${b.sort()}  ${c.sort()}  ${d.sort()}`);
        b.sort().push(0);
        c.sort().push(0);
        console.log(e= b.concat(c.concat(d)));
        return e;
    }
    if (b == 4){
        b=numeros.slice(0,2);
        c=numeros.slice(2,4);
        d=numeros.slice(4,7);
        e=numeros.slice(7,9);
        console.log(`La respuesta al arreglo es: ${b.sort()}  ${c.sort()}  ${d.sort()}  ${e.sort()} `);
        b.sort().push(0);
        c.sort().push(0);
        d.sort();
        console.log(f= b.concat(c.concat(d).concat(e)));
        return f;
    }
     if (b == 5){
            b=numeros.slice(0,1);
            c=numeros.slice(1,3);
            d=numeros.slice(3,6);
            e=numeros.slice(6,7);
            f=numeros.slice(7,9);
            console.log(`La respuesta al arreglo es: ${b.sort()}  ${c.sort()}  ${d.sort()}  ${e.sort()} ${f.sort()} `);
            b.sort().push(0);
            c.sort().push(0);
            d.sort().push(0);
            e.sort().push(0);
            f.sort();
            console.log(g= b.concat(c.concat(d).concat(e).concat(f)));
            return f;
    } else {
        b=numeros.slice(0,2)
        c=numeros.slice(2,4)
        d=numeros.slice(4,6)
        e=numeros.slice(6,8)
        f=numeros.slice(9)
        console.log(` La respuesta al arreglo es: ${b.sort()}  ${c.sort()}  ${d.sort()}  ${e.sort()} ${f.sort()} `);
        b.sort().push(0);
        c.sort().push(0);
        d.sort().push(0);
        e.sort().push(0);
        f.sort();
        console.log(g= b.concat(c.concat(d).concat(e).concat(f)));
        
        return f;
    }
}
blok(4);