const initialGameBoard = [
  [1,2,3],[11,12,13],[21,22,23]
];

const copy =initialGameBoard.map(array=>[...array])
// console.log(copy);
copy[1][1]=1234
for(let i=0;i<3;i++)
  for(let j=0;j<3;j++)
copy[i][j]*=100; 
console.log(initialGameBoard);
console.log(copy);
