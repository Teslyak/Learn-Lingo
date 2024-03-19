import{u as n,c as p,a as d,s as h,r as c,j as e,b as x,g as u}from"./index-lcdae8gF.js";import{T as g}from"./TeachersCard-CtexlOJy.js";const b=n.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,m=n.button`
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  &:hover {
    background-color: ${p.YELLOW_HOVER_BUTTON};
  }
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`,f=({setNamePopUp:o})=>{const r=d(h),[t,i]=c.useState(4),l=()=>{i(s=>s+4)},a=r.slice(0,t);return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:a.map(s=>e.jsx(g,{setNamePopUp:o,...s},s.id))}),t===a.length&&e.jsx(m,{type:"button",onClick:l,children:"Learn more"})]})},T=n.div`
  position: relative;
  max-width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`;function w({setNamePopUp:o}){const r=x();return c.useEffect(()=>{const t=new AbortController;return r(u({signal:t.signal})),()=>t.abort()},[r]),e.jsx(T,{children:e.jsx(f,{setNamePopUp:o})})}export{w as default};
