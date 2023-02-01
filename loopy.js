for(let i = 100; i <= 200; i++){
  let output = i;
  if(i % 3 === 0 && i % 4 === 0){
    output = "LoopyLighthouse";
  } else if(i % 3 === 0){
    output = "Loopy";
  } else if (i % 4 === 0){
    output = "Lighthouse";
  }
  console.log(output);
}