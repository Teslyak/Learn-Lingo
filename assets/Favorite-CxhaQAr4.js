import{u as e,a as r,d as n,j as t}from"./index-DVcy7rom.js";import{T as a}from"./TeachersCard-DpdhrdfG.js";const c=e.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,l=({setNamePopUp:i})=>{const s=r(n);return t.jsx(c,{children:s.map(o=>t.jsx(a,{...o,setNamePopUp:i},o.id))})},p=e.div`
  position: relative;
  width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  height: 100vh;
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
`,h=()=>t.jsx(x,{children:t.jsx(d,{children:"No favorites"})});function v({setNamePopUp:i}){const s=r(n);return t.jsx(p,{children:s.length>0?t.jsx(l,{setNamePopUp:i}):t.jsx(h,{})})}export{v as default};
