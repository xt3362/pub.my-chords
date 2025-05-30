import{w as a,a as i}from"./with-props-BMOtgW5C.js";import{o as s,M as l,L as c,S as p,p as d,O as u,q as h}from"./chunk-D4RADZKF-BXVSF3ox.js";const f=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function j({children:e}){return s.jsxs("html",{lang:"en",children:[s.jsxs("head",{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),s.jsx(l,{}),s.jsx(c,{}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
              // GitHub Pages用のSPAハック - 404.htmlからのリダイレクトを処理
              (function(l) {
                if (l.search[1] === '/' ) {
                  var decoded = l.search.slice(1).split('&').map(function(s) { 
                    return s.replace(/~and~/g, '&')
                  }).join('?');
                  window.history.replaceState(null, null,
                      l.pathname.slice(0, -1) + decoded + l.hash
                  );
                }
              }(window.location))
            `}})]}),s.jsxs("body",{children:[e,s.jsx(p,{}),s.jsx(d,{})]})]})}const g=a(function(){return s.jsx(u,{})}),w=i(function({error:t}){let o="Oops!",n="An unexpected error occurred.",r;return h(t)&&(o=t.status===404?"404":"Error",n=t.status===404?"The requested page could not be found.":t.statusText||n),s.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[s.jsx("h1",{children:o}),s.jsx("p",{children:n}),r]})});export{w as ErrorBoundary,j as Layout,g as default,f as links};
