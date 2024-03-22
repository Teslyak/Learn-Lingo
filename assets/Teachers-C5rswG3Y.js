import{u as a,c as x,a as d,s as l,r as c,j as e,b as h,g as u}from"./index-9e5FjvCP.js";import{T as g}from"./TeachersCard-Bo5HMlod.js";const b=a.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,m=a.button`
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  &:hover {
    background-color: ${x.YELLOW_HOVER_BUTTON};
  }
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`,f=({setNamePopUp:o})=>{const r=d(l),[t,i]=c.useState(4),p=()=>{i(s=>s+4)},n=r.slice(0,t);return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:n.map(s=>e.jsx(g,{setNamePopUp:o,...s},s.id))}),t===n.length&&e.jsx(m,{type:"button",onClick:p,children:"Learn more"})]})},T=a.div`
  position: relative;
  max-width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
  @media screen and (max-width: 730px) {
    padding: 96px 15px 96px 15px;
  }
`;function L({setNamePopUp:o}){const r=h();return c.useEffect(()=>{const t=new AbortController;return r(u({signal:t.signal})),()=>t.abort()},[r]),e.jsx(T,{children:e.jsx(f,{setNamePopUp:o})})}export{L as default};
