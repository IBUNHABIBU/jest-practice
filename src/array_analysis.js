const analyze = (array) => {
const object = {
  length: array.length,
  average: array.reduce((acc,curr)=> acc+curr, 0)/array.length,
  min: array.sort((a, b)=>a-b).shift(),
  max: array.pop(),
}
return object;
};
export default analyze;