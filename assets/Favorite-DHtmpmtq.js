import{u as e,a as n,d as o,j as t}from"./index-9e5FjvCP.js";import{T as a}from"./TeachersCard-Bo5HMlod.js";const p=e.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  }
`,x=({setNamePopUp:i})=>{const s=n(o);return t.jsx(p,{children:s.map(r=>t.jsx(a,{...r,setNamePopUp:i},r.id))})},d=e.div`
  position: relative;
  max-width: 1440px;
  /* @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  } */
`,c=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`,l=e.h2`
  font-style: italic;
  letter-spacing: -0.96px;
  font-size: 48px;
  font-weight: 400;
  color: rgb(188, 199, 210);
`,h=()=>t.jsx(c,{children:t.jsx(l,{children:"No favorites"})});function m({setNamePopUp:i}){const s=n(o);return t.jsx(d,{children:s.length>0?t.jsx(x,{setNamePopUp:i}):t.jsx(h,{})})}export{m as default};
