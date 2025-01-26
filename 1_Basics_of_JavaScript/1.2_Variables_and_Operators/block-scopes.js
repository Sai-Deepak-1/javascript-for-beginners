// Block scoping
{
  let blockScoped = "Block Scoped Variable";
  console.log(blockScoped); // Output: Block Scoped Variable
}

{
  const anotherBlockScoped = "Another Block Scoped Variable";
  console.log(anotherBlockScoped); // Output: Another Block Scoped Variable
}

// 'var' is function-scoped, accessible outside the block
{
  var globalVariable = "Accessible Outside Block";
}
console.log(globalVariable); // Output: Accessible Outside Block
