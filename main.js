let array = []


for(let i = 0; i<Infinity; i++){
    let begin = prompt('Введите команду')
    let x = begin.split(', ');
    if(x[0] == 'add'){
        array.push(x[1]);
    }
    if(x[0] == 'del'){
        for(let key in array){
            array[key] == x[1] ? array.splice(key, 1) : '' ;

        }
    }
    if(begin == 'stop'){
        break
    }
    console.log(array);
}
