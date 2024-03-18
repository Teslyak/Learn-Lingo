import{u as e,a as o,d as r,j as t}from"./index-Duq35C6w.js";import{T as n}from"./TeachersCard-D8r5lB1H.js";const a=e.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,c=()=>{const i=o(r);return t.jsx(a,{children:i.map(s=>t.jsx(n,{...s},s.id))})},l=e.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  height: 100vh;
`,p=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`,x=e.h2`
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
  color: rgb(188, 199, 210);
`,d=()=>t.jsx(p,{children:t.jsx(x,{children:"No favorites"})});function u(){const i=o(r);return t.jsx(l,{children:i.length>0?t.jsx(c,{}):t.jsx(d,{})})}export{u as default};
