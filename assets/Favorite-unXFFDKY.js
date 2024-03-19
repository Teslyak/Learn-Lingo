import{u as e,a as r,d as n,j as t}from"./index-D0VQjNRX.js";import{T as a}from"./TeachersCard-By4ho4fU.js";const c=e.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`,l=({setNamePopUp:i})=>{const s=r(n);return t.jsx(c,{children:s.map(o=>t.jsx(a,{...o,setNamePopUp:i},o.id))})},p=e.div`
  position: relative;
  max-width: 100vw;
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
`,f=()=>t.jsx(x,{children:t.jsx(d,{children:"No favorites"})});function h({setNamePopUp:i}){const s=r(n);return t.jsx(p,{children:s.length>0?t.jsx(l,{setNamePopUp:i}):t.jsx(f,{})})}export{h as default};
