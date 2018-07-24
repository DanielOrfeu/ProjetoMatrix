//Daniel Yago da Silva Orfeu Joaquim

function checarNumeroDecimal(n){
  return (n===Math.trunc(n));
}

function checarNumeroValido(n){
  if(typeof n==="number") return checarNumeroDecimal(n);
}

function somarInteiros(n){
  if(checarNumeroValido(n)){
    var res=0;
    for(var i=0; i<=n; i++){
      res+=i;
    }
  }
  return res;
}

function somarImpares(n){
  if(checarNumeroValido(n)){
    var res=0;
    for(var i=1; i<=n; i++){
      res+=i+(i-1);
    }
  }
  return res;
}