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

function multiplicarInteiros(n){ //Esta função não se baseia em fatorial de "n" (n!), tendo em mente que uma entrada de n===0 neste caso retorna 0, não 1.
  function operarMultiplicacao(n){
    return n===1? 1 : n*operarMultiplicacao(n-1);
  }
  if(checarNumeroValido(n)){
   return n===0? 0 : operarMultiplicacao(n);
  }
}
