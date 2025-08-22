function toCamelCase(str){
    const arr = str.split(/[-_]/);
    let camel = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        camel.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return camel.join('')
}