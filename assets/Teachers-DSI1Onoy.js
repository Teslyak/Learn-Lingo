import{u as n,c as h,a as x,s as u,r as c,b as i,j as e,g}from"./index-Duq35C6w.js";import{T as b}from"./TeachersCard-D8r5lB1H.js";const m=n.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`,f=n.button`
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  border: none;
  &:hover {
    background-color: ${h.YELLOW_HOVER_BUTTON};
  }
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
`,T=({setNamePopUp:o})=>{const r=x(u),[t,l]=c.useState(4),p=i(),d=()=>{l(s=>s+4),p(r.slice(0,t))},a=r.slice(0,t);return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:a.map(s=>e.jsx(b,{setNamePopUp:o,...s},s.id))}),t===a.length&&e.jsx(f,{type:"button",onClick:d,children:"Learn more"})]})},j=n.div`
  position: relative;
  max-width: 1440px;
  background: rgb(248, 248, 248);
  padding: 96px 128px 96px 128px;
`;function E({setNamePopUp:o}){const r=i();return c.useEffect(()=>{const t=new AbortController;return r(g({signal:t.signal})),()=>t.abort()},[r]),e.jsx(j,{children:e.jsx(T,{setNamePopUp:o})})}export{E as default};
