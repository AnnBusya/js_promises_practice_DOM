var n=function(n,t){var e=document.createElement("div");e.setAttribute("data-qa","notification"),e.classList.add(t?"success":"error"),e.textContent="".concat(n," promise was ").concat(t?"resolved":"rejected"),document.body.appendChild(e)},t=new Promise(function(n,t){document.addEventListener("click",function(){n()}),setTimeout(function(){return t(Error("First promise was rejected"))},3e3)}),e=new Promise(function(n,t){document.addEventListener("mousedown",function(t){(0===t.button||2===t.button)&&(n(),2===t.button&&t.preventDefault())})}),o=new Promise(function(n,t){var e=!1,o=!1,r=function(t){0===t.button&&(e=!0,document.removeEventListener("mousedown",r),o&&n())},u=function(t){2===t.button&&(o=!0,t.preventDefault(),document.removeEventListener("mousedown",u),e&&n())};document.addEventListener("mousedown",r),document.addEventListener("mousedown",u)});t.then(function(){return n("First",!0)}).catch(function(){return n("First",!1)}),e.then(function(){return n("Second",!0)}).catch(function(){return n("Second",!1)}),o.then(function(){return n("Third",!0)}).catch(function(){return n("Third",!1)});
//# sourceMappingURL=index.ca0c56fd.js.map