//Daniel Yago da Silva Orfeu Joaquim

function checarNumeroDecimal(n){
  return (n===Math.trunc(n));
}

function checarNumeroValido(n){
  if(typeof n==="number") return checarNumeroDecimal(n);
}

function somarInteiros(n){
  function operarSoma(n){
    return n===0? 0 : n+operarSoma(n-1);
  }
  if(checarNumeroValido(n)){
   return operarSoma(n);
  }
}

function somarImpares(n){
  function operarSomaImpar(n){
    return n===0? 0 : (n+(n-1))+operarSomaImpar(n-1);
  }
  if(checarNumeroValido(n)){
   return operarSomaImpar(n);
  }
}

function multiplicarInteiros(n){
  function operarMultiplicacao(n){
    return n===1? 1 : n*operarMultiplicacao(n-1);
  }
  if(checarNumeroValido(n)){
   return n===0? 0 : operarMultiplicacao(n);
  }
}