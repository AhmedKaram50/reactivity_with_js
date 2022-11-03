const FIRST_ATTR_NAME = "data";

const data = {
  names: [
    { name: "ahmed1" },
    { name: "ahmed2" },
    { name: "ahmed3" },
    { name: "ahmed4" },
    { name: "ahmed5" },
    { name: "ahmed6" },
  ],
  ages: [55, 60, 1, 80, 88],
};

const iterate = (obj) => {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
    console.log(`key: ${key}, value: ${obj[key]}`)
        iterate(obj[key])
      }
  })
}

function createNodesJSON(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

function createElementFromNodesObject(nodesObject) {
  const { nodeName, attributes, children } = nodesObject;
  console.log(nodesObject); //! console here
  const mainElement = document.createElement(nodeName);
  for (let attr in attributes) {
    mainElement.setAttribute(attr, attributes[attr]);
  }

  iterate(children[1])

  // let current = children?.children;
  // while (current.hasOwnProperty("children")) { // * if the element still has more children
  //   // console.log(current, current.hasOwnProperty("children"));
  //   current = child.children;
  // }


  // children.forEach((child) => {
  //   console.log(child)
  //   if (typeof child === "object") {
      
     
  //   }

    
  // });
  return mainElement;
}

console.log(
  createElementFromNodesObject(
    createNodesJSON("div", { id: "test", class: "navbar" }, [
      "text in the div",
      createNodesJSON(
        "h1",
        { class: "main-heading" },
        createNodesJSON("span", {class: "span-class" }, "span text")
      ),
      createNodesJSON(
        "h1",
        { class: "main-heading" },
        createNodesJSON("span", {class: "span-class" }, "span text")
      ),
    ])
  )
);

function loopingOnDataForElements() {
  // ! change name here
  const dataForElements = document.querySelectorAll(`[${FIRST_ATTR_NAME}-for]`);
  dataForElements.forEach((el) => {
    const attributeValue = el.getAttribute(`${FIRST_ATTR_NAME}-for`);
    const attributeValueAsArray = attributeValue.split(" ");
    const [item, operator, items] = attributeValueAsArray;
    if (attributeValueAsArray.length !== 3 || operator !== "in")
      return console.warn("Syntax Error From Reactivity System");
    if (!data.hasOwnProperty(items)) return console.error(`${items} not found`);
    const bindElements = el.querySelectorAll(`[${FIRST_ATTR_NAME}-bind]`);
    const elementsInsideFor = el.children;
    data[items].forEach((i) => {
      el.insertAdjacentHTML("beforeend", elementsInsideFor[1].outerHTML);
    });
  });
}
loopingOnDataForElements();

document.getElementById("add").addEventListener("click", () => {
  console.log("ahh");
});
