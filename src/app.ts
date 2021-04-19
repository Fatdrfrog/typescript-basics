const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener(
    "click",
    clickHandler.bind(null, "Yasdasdre welcome!")
  );
}
//1) watch mode: tsc name.ts -w
//2) entire project based on defer in index.html:
// - tsc --init => to create tsconfig
// - tsc => to compile
// - tsc -w  => to watch
