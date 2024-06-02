document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label"),r=e.getAttribute("name").replace(/([A-Z])/g," $1").trim();t.classList.add("field-label"),t.setAttribute("for",e.getAttribute("id")),t.textContent=r,e.before(t),e.setAttribute("placeholder",r.charAt(0).toUpperCase()+r.slice(1))});
//# sourceMappingURL=index.e4e0fbd5.js.map
