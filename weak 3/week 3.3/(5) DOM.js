/* What is the DOM (Document Object Model)?
Think of the DOM as a bridge between your HTML page and your JavaScript code.

⚙️ In simpler words:
DOM = your HTML page represented as a JavaScript object that you can control.

🧠 For Example:
If your HTML is: <h1 id="title"> Hello Harshit </h1>

You can control it in JS like this: document.getElementById("title").innerText = "Hello Bro 😎";

Boom 💥 — you just changed your webpage content using JS.

-----------------------------------------------------------------------------

🧩 DOM = 3 Things
Concept	Meaning
Document	The whole HTML page
Object	Represented as JavaScript object
Model	Structure (tree-like format)

-----------------------------------------------------------------------------

you just locate any html element and then u can change it by using DOM with js.

EXAMPLE :
    <h1 id="title">Hey!</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
    function changeText() {
        const heading = document.getElementById("title");
        heading.innerText = "You clicked me!";
        heading.style.color = "blue";
    }
    </script>

✅ Click the button → text & color change instantly 🎨

        1️⃣ Locate element → document.getElementById("id")
        2️⃣ Modify element → innerText / innerHTML / style / classList etc.
        DOM lets JS control and update your HTML dynamically

--------------------------------------------------------------------------

🧠 Multiple Ways to Locate (Select) HTML Elements :
The DOM gives us several methods inside the document object to find elements on a webpage.
Here’s the complete list (with examples you’ll actually use 👇):

----------------------------------------(1)--Finding ELements by HTML selectors----------------------------------------

🔹 1️⃣ getElementById()
Finds a single element by its id.

html = <h1 id="title">Hello</h1>

js = const heading = document.getElementById("title");
     console.log(heading.innerText); // "Hello"

✅ Use when: You know the element’s unique id.
⚡ Returns: A single element.

*------------------------------------------*

🔹 2️⃣ getElementsByClassName()
Finds multiple elements having the same class name.

html = <p class="info">Hi</p>
       <p class="info">Hey</p>

js = const paragraphs = document.getElementsByClassName("info");
     console.log(paragraphs.length); // 2

✅ Use when: You want to grab multiple elements with the same class.
⚡ Returns: A HTMLCollection (like an array).

*------------------------------------------*

🔹 3️⃣ getElementsByTagName()
Finds all elements of a certain tag.

html = <p>First</p>
       <p>Second</p>

js = const paras = document.getElementsByTagName("p");
     console.log(paras[0].innerText); // "First"

✅ Use when: You need all <div>, <p>, etc.
⚡ Returns: A HTMLCollection.

*------------------------------------------*

🔹 4️⃣ querySelector()
Finds the first element matching a CSS selector.

html = <p class="info">Hello</p>
       <p class="info">Hey</p>

js = const firstPara = document.querySelector(".info");
    console.log(firstPara.innerText); // "Hello"

✅ Use when: You want to grab just one element that matches a CSS selector (like #id, .class, tag).

*------------------------------------------*

🔹 5️⃣ querySelectorAll()
Finds all elements matching a CSS selector.

js = const allParas = document.querySelectorAll(".info");
     console.log(allParas.length); // 2

✅ Use when: You want all matching elements of a class, tag, etc.
⚡ Returns: A NodeList (you can loop through it easily).

*------------------------------------------*

🔹 6️⃣ (Less common) document.forms, document.images, document.links
Special shortcuts to get specific parts of a page:

js = document.forms      // all <form> elements
     document.images     // all <img> tags
     document.links      // all <a> tags


----------------------------------------(2)--Finding ELements by css selectors----------------------------------------

🧠 Finding Elements by CSS Selectors (querySelector / querySelectorAll)

JavaScript lets you find HTML elements the same way you’d select them in CSS —
using IDs, classes, tags, or attributes.

------------------------------------------------------------------------

This is done using:
document.querySelector()      // returns the first match
document.querySelectorAll()   // returns all matches

*------------------------------------------*

🔹 1️⃣ By ID Selector
Same as CSS #id

HTML = <h1 id="title">Hello</h1>

js   = const heading = document.querySelector("#title");
       console.log(heading.innerText); // Hello

✅ Finds the element with the id="title"

*------------------------------------------*

🔹 2️⃣ By Class Selector
Same as CSS .className

HTML =  <p class="info">First</p>
        <p class="info">Second</p>

js   =  const firstPara = document.querySelector(".info");   // first match only
        const allParas = document.querySelectorAll(".info"); // all matches

console.log(allParas.length); // 2

✅ querySelector() → returns only the first element
✅ querySelectorAll() → returns a list of all elements that match

*------------------------------------------*

🔹 3️⃣ By Tag Selector
Same as CSS tagName

HTML =  <div>One</div>
        <div>Two</div>

js   =  const firstDiv = document.querySelector("div");
        const allDivs = document.querySelectorAll("div");

console.log(allDivs[1].innerText); // Two

✅ Finds elements by their tag type.

*------------------------------------------*
🔹 4️⃣ By Attribute Selector
Same as CSS [attribute=value]

HTML =  <input type="text" placeholder="Enter name" />

js   =  const input = document.querySelector("input[placeholder='Enter name']");
        input.style.border = "2px solid blue";

✅ Selects element based on specific attribute values.

*------------------------------------------*

🔹 5️⃣ By Descendant (Nested) Selector

Find elements inside other elements.

HTML =  <div class="container">
        <p class="text">Hello</p>
         </div>

js   =  const para = document.querySelector(".container .text");
        console.log(para.innerText); // Hello

✅ Works like CSS: .parent .child

*------------------------------------------*

🔹 6️⃣ By Pseudo Selector (Optional)
Like :first-child, :nth-child, etc.

Html =  <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Orange</li>
        </ul>

js   =  <script>
        const firstItem = document.querySelector("ul li:first-child");
        const secondItem = document.querySelector("ul li:nth-child(2)");
        console.log(firstItem.innerText); // Apple
        console.log(secondItem.innerText); // Mango
        </script>

-----------------------------------------------------------------------------

📓 Short Notes :
querySelector → returns first matching element
querySelectorAll → returns all matching elements (NodeList)
Works with CSS selectors: #id, .class, tag, [attr=value]

 Examples :
document.querySelector("#title")
document.querySelector(".info")
document.querySelectorAll("p")
document.querySelector("input[type='text']")
document.querySelector(".parent .child")

-----------------------------------------------------------------------------

⚡ Mini Example 
<h1 id="title">Hello Harshit</h1>
<p class="text">DOM is fun!</p>
<p class="text">Let's go 🔥</p>

<script>
  const title = document.querySelector("#title");
  const texts = document.querySelectorAll(".text");

  title.style.color = "red";
  texts[1].innerText = "We just changed this using querySelectorAll!";
</script>


------------------------------------ Changing HTML Elements (DOM Manipulation)----------------------------------------

Once you’ve selected an HTML element using DOM methods (like document.querySelector()),
you can change its content, attributes, or style.

----------------------------------------------------------------------------

🔹 Properties--
Property                            	                     Description	                                   Example
element.innerHTML = newHTMLContent	       Changes the HTML content inside an element	    title.innerHTML = "<b>Hello Harshit!</b>"
element.attribute = newValue                     Changes an attribute value directly	               img.src = "profile.jpg"
element.style.property = newStyle	             Changes the CSS style of an element	              title.style.color = "blue"

🔹 Method
Method                                                 	Description	                                 Example
element.setAttribute(attribute, value)	   Sets or changes an attribute value	   link.setAttribute("href", "https://google.com")

----------------------------------------------------------------------------

⚙️ Example--
HTML = <h1 id="title">Hello</h1>
       <img id="photo" src="old.jpg" />
       <a id="link" href="#">Click Here</a>

js =  <script>
        const heading = document.getElementById("title");
        const image = document.getElementById("photo");
        const link = document.getElementById("link");


  1️⃣ Change HTML content
  heading.innerHTML = "<i>Hello Harshit 👑</i>";

  2️⃣ Change attribute
  image.src = "newphoto.jpg";

  3️⃣ Change style
  heading.style.color = "red";
  heading.style.fontSize = "30px";

  4️⃣ Using setAttribute()
  link.setAttribute("href", "https://www.youtube.com");
</script>

----------------------------------------------------------------------------

📓 Short Notes
innerHTML → change or add HTML content
attribute  → change element property (like src, href, id)
style.property → change CSS style dynamically
setAttribute(attr, value) → add/update an attribute

💡 Example in One Line
Locate → Modify → Update
e.g., document.querySelector("#title").style.color = "red";

----------------------------------------------------------------------------

⚡ 5️⃣ Event Handling (Core DOM Skill)

DOM events = when something happens on the webpage
(e.g., user clicks, hovers, types, etc.)

HTML = <button id="btn">Click Me</button>

js = <script>
     const btn = document.getElementById("btn");

  Method 1: Inline in HTML
  <button onclick="alert('Clicked!')">Click</button>

  Method 2: Add event in JS
  btn.addEventListener("click", function() {
    alert("You clicked the button!");
  });
</script>


✅ Common events:
click, mouseover, mouseout, keydown, keyup, submit, change, etc.

📓 Short Note:
element.addEventListener("eventName", callbackFunction);

----------------------------------------------------------------------------

⚡ 6️⃣ Creating New Elements (Dynamic DOM)

You can create HTML elements on the fly using JS:

const newDiv = document.createElement("div");
newDiv.innerText = "I was created with JS!";
document.body.appendChild(newDiv);


✅ createElement() → makes a new element
✅ appendChild() → adds it to the DOM

----------------------------------------------------------------------------

⚡ 7️⃣ Removing Elements

Delete things dynamically 👇

const element = document.getElementById("title");
element.remove(); // Removes the element from the page

----------------------------------------------------------------------------

⚡ 8️⃣ Traversing the DOM (Parent / Child / Sibling)

Sometimes you need to move around the DOM tree.

Html =  <div id="parent">
        <p id="child">Hello</p>
        </div>

js =     <script>
        const child = document.getElementById("child");
        console.log(child.parentElement);  // gives <div>
        console.log(child.nextSibling);    // next element
        </script>


✅ parentElement, children, firstChild, nextSibling

----------------------------------------------------------------------------

⚡ 9️⃣ DOMContentLoaded

Make sure your JS runs after the HTML is fully loaded:

document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded and DOM ready!");
});

----------------------------------------------------------------------------

⚡ 🔟 Reading Form Inputs

HTML =   <input id="name" type="text" placeholder="Enter your name">
         <button onclick="showName()">Submit</button>

js =    <script>
        function showName() {
            const name = document.getElementById("name").value;
            alert("Hello " + name);
        }
        </script>


✅ .value → used to read input field values

----------------------------------------------------------------------------

🧠 Summary:

Concept	Key Function / Method	Example
Select	document.querySelector()	#id, .class
Change	element.innerText, .style	el.style.color="red"
Add	document.createElement()	Add new tag
Remove	element.remove()	Delete tag
Event	addEventListener()	Click, hover, etc.
Input	input.value	Get form data
Navigate	parentElement, children	Move in DOM


💡 Final Note:
DOM = Find → Change → Create → Remove → React (Events)
Once you understand that flow, you can build interactive websites like a pro 🔥

*/




//-----------------------------------------------------------Another nOtes---------------------------------------------------------------



/* 
==========================================================
📘 DOCUMENT OBJECT MODEL (DOM) — COMPLETE NOTES
==========================================================

Think of the DOM as the "bridge" between JavaScript and HTML.
It lets JS access, manipulate, and dynamically control your webpage.
*/

// ----------------------------------------------------------
// 🧩 1️⃣ WHAT IS DOM?
// ----------------------------------------------------------

/*
DOM stands for Document Object Model.
It represents your HTML as a tree of nodes (objects) — each element, attribute, and text becomes a node.
It allows JS to talk to the browser, change content, and react to user actions.

🧠 Analogy:
JS is like a remote control, and DOM is the TV’s interface. 
When JS presses a button, DOM updates what you see.

*/

// ----------------------------------------------------------
// 🧩 2️⃣ COMMUNICATION WITH THE BROWSER
// ----------------------------------------------------------

/*
The DOM gives JS a set of tools:
    - Properties → describe things about elements
    - Methods → perform actions
    - Events → react to user interactions
*/

// Example:
document.title = "My Page";  // Property
document.getElementById("btn"); // Method
document.addEventListener("click", () => {}); // Event

// ----------------------------------------------------------
// 🧩 3️⃣ ACCESSING THE DOM
// ----------------------------------------------------------

// 🎯 Goal: Locate elements (like getting the remote control buttons)

// ✅ By ID:
const elementById = document.getElementById("myElement");

// ✅ By Tag Name:
const elementsByTagName = document.getElementsByTagName("p"); // HTMLCollection

// ✅ By Class Name:
const elementsByClassName = document.getElementsByClassName("container");

// ✅ By CSS Selector:
const single = document.querySelector(".box");     // First matching element
const all = document.querySelectorAll(".box");     // All matching (NodeList)

// ✅ By Name:
const inputs = document.getElementsByName("username");

/*
Note:
- querySelector returns only ONE (first match)
- querySelectorAll returns a NodeList (you can use forEach)
*/

// ----------------------------------------------------------
// 🧩 4️⃣ DOM TREE
// ----------------------------------------------------------

/*
The DOM Tree is a hierarchical representation of the web page:

Document
 └── html
      ├── head
      │    └── title
      └── body
           ├── h1
           ├── p
           └── div
*/

// You can navigate this structure:
const body = document.body;
const firstChild = body.firstElementChild;
const parent = firstChild.parentElement;

// ----------------------------------------------------------
// 🧩 5️⃣ CHANGING HTML ELEMENTS
// ----------------------------------------------------------

// ✅ Change inner content
document.getElementById("title").innerHTML = "<b>Hello Harshit</b>"; // with HTML
document.getElementById("title").textContent = "Hello Harshit";       // text only

// ✅ Change attributes
document.getElementById("link").setAttribute("href", "https://google.com");

// ✅ Change styles
const title = document.getElementById("title");
title.style.color = "blue";
title.style.fontSize = "28px";

// ✅ Change classes dynamically
title.classList.add("highlight");
title.classList.remove("hidden");
title.classList.toggle("dark-mode");

// ----------------------------------------------------------
// 🧩 6️⃣ HTMLCollection vs NodeList
// ----------------------------------------------------------

/*
📦 HTMLCollection:
 - Live (updates automatically)
 - Returned by getElementsByTagName, getElementsByClassName
 - Can be accessed via index, but no forEach()

📦 NodeList:
 - Can be static (querySelectorAll) or live (childNodes)
 - Can include text/comments
 - Supports forEach()
*/

// Example:
const coll = document.getElementsByTagName("p"); // HTMLCollection
const list = document.querySelectorAll(".item"); // NodeList

// ----------------------------------------------------------
// 🧩 7️⃣ ADDING AND REMOVING ELEMENTS
// ----------------------------------------------------------

// ✅ Create and append
const newDiv = document.createElement("div");
newDiv.innerText = "I’m a new div!";
document.body.appendChild(newDiv);

// ✅ Insert before another element
const parentElement = document.getElementById("container");
const reference = document.getElementById("child");
parentElement.insertBefore(newDiv, reference);

// ✅ Replace element
const newButton = document.createElement("button");
newButton.innerText = "Click Me";
parentElement.replaceChild(newButton, reference);

// ✅ Remove element
newDiv.remove();

// ----------------------------------------------------------
// 🧩 8️⃣ SETTING ATTRIBUTES DYNAMICALLY
// ----------------------------------------------------------

// Example:
const img = document.getElementById("photo");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "Profile Photo");

// Or change existing attributes:
img.src = "updated.jpg";

// ----------------------------------------------------------
// 🧩 9️⃣ DYNAMIC EXAMPLE — Changing Input to Button
// ----------------------------------------------------------

function changeToButton() {
  const input = document.getElementById("myInput");
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerHTML = "Click Me";
  input.parentNode.replaceChild(button, input);
}

// ----------------------------------------------------------
// 🧩 🔟 EVENT HANDLING
// ----------------------------------------------------------

/*
Events are user interactions (click, hover, typing, etc.)
We use Event Listeners to respond dynamically.
*/

// ✅ Inline event (not best practice)
// <button onclick="sayHi()">Click</button>

function sayHi() {
  alert("Hello Harshit!");
}

// ✅ Using addEventListener (recommended)
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("You clicked the button!");
});

// ✅ Multiple event listeners
btn.addEventListener("mouseenter", () => (btn.style.backgroundColor = "yellow"));
btn.addEventListener("mouseleave", () => (btn.style.backgroundColor = ""));

// ----------------------------------------------------------
// 🧩 11️⃣ DOM EVENT OBJECT
// ----------------------------------------------------------

btn.addEventListener("click", (event) => {
  console.log("Event target:", event.target);
  console.log("Event type:", event.type);
});

// ----------------------------------------------------------
// 🧩 12️⃣ EVENT BUBBLING & CAPTURING
// ----------------------------------------------------------

/*
Event Capturing → top to bottom
Event Bubbling → bottom to top (default)
*/

document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer clicked");
});

document.getElementById("inner").addEventListener("click", () => {
  console.log("Inner clicked");
});

// Capturing phase example
document.getElementById("outer").addEventListener(
  "click",
  () => console.log("Outer (capturing)"),
  true // enables capturing
);

// ----------------------------------------------------------
// 🧩 13️⃣ ONLOAD & ONUNLOAD
// ----------------------------------------------------------

window.onload = () => {
  console.log("Page fully loaded!");
};

window.onunload = () => {
  console.log("Page is closing...");
};

// ----------------------------------------------------------
// 🧩 14️⃣ FORM HANDLING EXAMPLE
// ----------------------------------------------------------

function showName() {
  const name = document.getElementById("name").value;
  alert("Welcome, " + name + "!");
}

// ----------------------------------------------------------
// 🧩 15️⃣ DOM EVENT LISTENER (Multiple Events Example)
// ----------------------------------------------------------

const multiButton = document.getElementById("myButton");

multiButton.addEventListener("click", () => {
  multiButton.style.backgroundColor = "green";
  alert("Button clicked!");
});

multiButton.addEventListener("mouseenter", () => {
  multiButton.style.backgroundColor = "yellow";
});

multiButton.addEventListener("mouseleave", () => {
  multiButton.style.backgroundColor = "";
});

// ----------------------------------------------------------
// 🧩 16️⃣ DOM NODES — Types of Nodes
// ----------------------------------------------------------

/*
1️⃣ Element Nodes  → <div>, <p>
2️⃣ Attribute Nodes → id, class, src
3️⃣ Text Nodes → text inside an element
4️⃣ Comment Nodes → <!-- comment -->
5️⃣ Document Node → entire HTML document
6️⃣ Document Type Node → <!DOCTYPE html>
*/

// Accessing node relationships
const node = document.getElementById("demo");
console.log(node.nodeType, node.nodeName, node.parentNode);

// ----------------------------------------------------------
// 🧩 17️⃣ DOM MANIPULATION SHORTCUTS
// ----------------------------------------------------------

document.body.insertAdjacentHTML("beforeend", "<p>Added content</p>");
document.getElementById("replaceMe").outerHTML = "<h2>Replaced Element!</h2>";

// ----------------------------------------------------------
// 🧩 18️⃣ SUMMARY & CORE CONCEPTS
// ----------------------------------------------------------

/*
✅ DOM = JS Interface to control HTML
✅ Methods to Find: getElementById, querySelector, etc.
✅ Modify: innerHTML, setAttribute, style
✅ Add/Remove: createElement, appendChild, remove()
✅ Events: click, mouseover, keydown, submit
✅ Event Handling: addEventListener()
✅ Bubbling vs Capturing
✅ Node Relationships: parent, child, sibling
✅ Form inputs with .value
✅ Page Lifecycle: onload / onunload
*/

// ----------------------------------------------------------
// 🧩 19️⃣ MINI GREETING PROJECT (innerHTML Example)
// ----------------------------------------------------------

function displayGreeting() {
  const enteredName = document.getElementById("nameInput").value;
  document.getElementById("greetingMessage").innerHTML = "Hello, " + enteredName + "!";
}

/*
HTML for it:
<label for="nameInput">Enter Your Name:</label>
<input type="text" id="nameInput">
<button onclick="displayGreeting()">Submit</button>
<p id="greetingMessage"></p>
*/

// ----------------------------------------------------------
// 🧠 FINAL SUMMARY LINE
// ----------------------------------------------------------

/*
DOM = Find → Change → Create → Remove → React
Master this flow, and you master interactive web pages!
*/
