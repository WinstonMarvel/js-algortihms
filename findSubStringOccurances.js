//Find occurances of string in a larger string

console.clear()
var test = "thisdisareallylongthisisthisextinwhichineedtosearch";


const findInString = (str, test) => {
  result = {
    val: 0,
    index: 0,
    reset: function(){
      this.index = 0;
    }
  };
  for(var i = 0; i < test.length; i++){
    
    if(test.charAt(i) == str.charAt(result.index)){
      if(result.index == str.length - 1){
        result.reset();
        result.val++;
      } else {
        result.index++;
      }
    } else {
      result.reset();
    }
    
  }
  return result;
};
           
console.log( findInString("this", test) );