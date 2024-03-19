import{u as e,a as r,d as n,j as t}from"./index-CpdzJHXa.js";import{T as a}from"./TeachersCard-CAdshC64.js";const c=e.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  overflow-y: auto;
  height: 100vh;
`,l=({setNamePopUp:i})=>{const o=r(n);return t.jsx(c,{children:o.map(s=>t.jsx(a,{...s,setNamePopUp:i},s.id))})},p=e.div`
  position: relative;
  width: 1440px;
 
`,x=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`,d=e.h2`
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
  color: rgb(188, 199, 210);
`,h=()=>t.jsx(x,{children:t.jsx(d,{children:"No favorites"})});function v({setNamePopUp:i}){const o=r(n);return t.jsx(p,{children:o.length>0?t.jsx(l,{setNamePopUp:i}):t.jsx(h,{})})}export{v as default};
