//Daniel Yago da Silva Orfeu Joaquim

function checarNumeroDecimal(n){
  return (n===Math.trunc(n));
}

function checarNumeroNegativo(n){
  if(n>=0) return checarNumeroDecimal(n);
}

function checarNumeroValido(n){
  if(typeof n==="number") return checarNumeroNegativo(n);
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

function multiplicarInteiros(n){
  if(checarNumeroValido(n)){
    var res;
    n===0? res=0 : res=1;
    for(var i=1; i<=n; i++){
      res*=i;
    }
  }
  return res;
}
