(()=>{var __webpack_modules__={896:()=>{eval('const includeHeader = document.querySelector(".include_header")\nconst includeFooter = document.querySelector(".include_footer")\n\nconst include = (htmlTag, htmlFile) => {\n    fetch(htmlFile)\n    .then(elem => elem.text())\n    .then(elem => htmlTag.innerHTML = elem)\n}\n\ninclude(includeHeader, "../html/include_header.html")\ninclude(includeFooter, "../html/include_footer.html")//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODk2LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vc3JjL2Fzc2V0cy9qcy9pbmNsdWRlLmpzPzM0OTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5jbHVkZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5jbHVkZV9oZWFkZXJcIilcbmNvbnN0IGluY2x1ZGVGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluY2x1ZGVfZm9vdGVyXCIpXG5cbmNvbnN0IGluY2x1ZGUgPSAoaHRtbFRhZywgaHRtbEZpbGUpID0+IHtcbiAgICBmZXRjaChodG1sRmlsZSlcbiAgICAudGhlbihlbGVtID0+IGVsZW0udGV4dCgpKVxuICAgIC50aGVuKGVsZW0gPT4gaHRtbFRhZy5pbm5lckhUTUwgPSBlbGVtKVxufVxuXG5pbmNsdWRlKGluY2x1ZGVIZWFkZXIsIFwiLi4vaHRtbC9pbmNsdWRlX2hlYWRlci5odG1sXCIpXG5pbmNsdWRlKGluY2x1ZGVGb290ZXIsIFwiLi4vaHRtbC9pbmNsdWRlX2Zvb3Rlci5odG1sXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///896\n')}},__webpack_exports__={};__webpack_modules__[896]()})();