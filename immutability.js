//Take an Object with your mother's name and your age and
// Create new Obj for your sibling with Age Difference

const myObj = { MotherName: "Savitha", MyName: "Shashank", MyAge: 26 };
const siblingObj = { ...myObj, MyName: "Aakarsha", MyAge: myObj.MyAge - 5 };

console.log(myObj, siblingObj);



//Take an array with five colors and
// create a new array by adding two more colors to it(the original array should be unchanged)

const colorsArr = ["blue", "pink", "orange", "violet", "brown"];
const newColorsArr = colorsArr.concat(["purple", "green"]);

console.log(colorsArr, newColorsArr);
