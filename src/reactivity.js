import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue-reactivity/watch";
/**/
// class Foo {
//   bar; //Normal property using a OOP approach

//   constructor () {
//     this.bar = ref('Foo') // Initialize the variable using the ref from Vue
//   }

//   // This getter function goes into our component and we need to pass the bar property inside an object to make this possible
//   getter() {
//     console.log("jjjjjjj")
//     return {
//       bar: this.bar
//     }
//   }

//   // This method is only for example to see that the reactivity works
//   handleForm() {
//     console.log(
//       this.bar
//     )
//   }
// }

// const foo = new Foo()
const f = ref("ahmed");
console.log(f.value);
f.value = "fonss";
console.log(f.value);


document.getElementById("add").addEventListener("click", () => {
  f.value += "asfasf";
});

watchEffect(() => {
  console.log('counter')
  document.querySelector(".holder div").innerHTML = f.value;
})

/**/

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

function createNodesJSON(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

function createElementFromNodesObject(nodesObject) {
  const iterate = (obj) => {
    const { nodeName, attributes, children } = obj;
    const mainElement = document.createElement(nodeName);
    // console.log(mainElement)
    for (let attr in attributes) {
      mainElement.setAttribute(attr, attributes[attr]);
    }
    // console.log(children)
    children.forEach((child) => {
      if (typeof child === "object" && child !== null) {
        const { nodeName, attributes, children } = child;
        // console.log(child)
      } else if (typeof child === "string") {
        mainElement.append(child);
      }
    });

    Object.keys(obj).forEach((key) => {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        obj.hasOwnProperty("children")
      ) {
        // console.log("jj", obj)
        children.forEach((child) => {
          if (typeof child === "object") {
            iterate(child);
          } else {
            // mainElement.append(child)
            // console.log(child)
          }
        });
      } else {
        // mainElement.append
      }
    });

    return mainElement;
  };

  // children.forEach((el) => {
  //   if (typeof el === "object") {
  //     iterate(el);
  //   } else {
  //     mainElement.append(el)
  //   }
  // });

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
  return iterate(nodesObject);
}
const testObj = createNodesJSON("div", { id: "test", class: "navbar" }, [
  "text in the div",
  createNodesJSON(
    "h1",
    { class: "main-heading" },
    createNodesJSON("span", { class: "span-class" }, "span text")
  ),
  createNodesJSON(
    "h2",
    { class: "main-heading" },
    createNodesJSON("span", { class: "span-class" }, "span text")
  ),
]);

console.log(createElementFromNodesObject(testObj));

// function loopingOnDataForElements() {
//   const dataForElements = document.querySelectorAll(`[${FIRST_ATTR_NAME}-for]`);
//   dataForElements.forEach((el) => {
//     const attributeValue = el.getAttribute(`${FIRST_ATTR_NAME}-for`);
//     const attributeValueAsArray = attributeValue.split(" ");
//     const [item, operator, items] = attributeValueAsArray;
//     if (attributeValueAsArray.length !== 3 || operator !== "in")
//       return console.warn("Syntax Error From Reactivity System");
//     if (!data.hasOwnProperty(items)) return console.error(`${items} not found`);
//     const bindElements = el.querySelectorAll(`[${FIRST_ATTR_NAME}-bind]`);
//     const elementsInsideFor = el.children;
//     data[items].forEach((i) => {
//       el.insertAdjacentHTML("beforeend", elementsInsideFor[1].outerHTML);
//     });
//   });
// }
// loopingOnDataForElements();

// document.getElementById("add").addEventListener("click", () => {
//   f.value = "asfasf"
//   console.log(f.value)

// });

/*=========== fff=================*/
