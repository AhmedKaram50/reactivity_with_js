const FIRST_ATTR_NAME = 'data'

const data = {
  names: [
    { name: "ahmed1" },
    { name: "ahmed2" },
    { name: "ahmed3" },
    { name: "ahmed4" },
    { name: "ahmed5" },
    { name: "ahmed6" },
  ],
  ages: [
    55,
    60,
    1,
    80,
    88,
  ]
};

function looping() {
  // ! change name here
  const dataForElements = document.querySelectorAll(`[${FIRST_ATTR_NAME}-for]`);
  dataForElements.forEach((el) => {
    const attributeValue = el.getAttribute(`${FIRST_ATTR_NAME}-for`);
    const attributeValueAsArray = attributeValue.split(" ");
    const [item, operator, items] = attributeValueAsArray;
    if (attributeValueAsArray.length !== 3 || operator !== "in")
      return console.warn("Syntax Error From Reactivity System");
    if (!data.hasOwnProperty(items)) return console.error(`${items} not found`);
    el.querySelectorAll(`[${FIRST_ATTR_NAME}-bind]`)
    console.log(el.querySelectorAll(`[${FIRST_ATTR_NAME}-bind]`));
  });
}
looping();

document.getElementById("add").addEventListener("click", () => {
  console.log("ahh");
});
