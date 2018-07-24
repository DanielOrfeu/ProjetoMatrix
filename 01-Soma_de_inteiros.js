//Daniel Yago da Silva Orfeu Joaquim

function somarInteiros(n){
  if(typeof n==="number" && n===Math.trunc(n) && n>=0){
    var res=0;
    for(var i=0; i<=n; i++){
      res+=i;
    }
  }
  return res;
}
