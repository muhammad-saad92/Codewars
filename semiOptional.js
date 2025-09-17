function wrap(value) {
    let obj = {
        "value" : value
    }
  return obj;
}
wrapper_obj = wrap("my_wrapped_string"); 
console.log(wrapper_obj)