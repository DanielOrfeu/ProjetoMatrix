//Daniel Yago da Silva Orfeu Joaquim

function somarInteiros(n){
  if(typeof n==="number" && n===Math.trunc(n)){
    var res=0;
    for(var i=0; i<=n; i++){
      res+=i;
    }
  }
  return res;
}

function somarImpares(n){
  if(typeof n==="number" && n===Math.trunc(n)){
    var res=0;
    for(var i=1; i<=n; i++){
      res+=i+(i-1);
    }
  }
  return res;
}