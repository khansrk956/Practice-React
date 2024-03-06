function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
//    console.log(a) :- click me to visit google
   for (const prop in reactElement.props) {
    if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        
   }
   container.appendChild(domElement)

}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'click me to visit google'
}
// get the root div from index.html
const mainContainer = document.querySelector('#root')
console.log(reactElement)
// customer render : expect two things.
// first kisme inject kru or kha par inject kru.
customRender(reactElement,mainContainer)
// still don't know how customRender work.