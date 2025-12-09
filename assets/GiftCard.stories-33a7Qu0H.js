import{j as t}from"./jsx-runtime-u17CrQMm.js";function s({gift:e,onDelete:o,onSelect:a}){return t.jsxs("div",{className:`christmas-card p-6 ${e.is_selected?"ring-4 ring-christmas-gold":""} transition-all`,children:[e.is_selected&&t.jsx("div",{className:"absolute top-2 right-2 text-4xl",children:"⭐"}),t.jsx("h3",{className:"text-xl font-christmas font-bold mb-2 text-christmas-gold",children:e.title}),t.jsx("p",{className:"text-white/90 mb-4",children:e.description}),t.jsxs("div",{className:"flex gap-2",children:[!e.is_selected&&t.jsx("button",{onClick:()=>a(e.id),className:"christmas-button flex-1",children:"⭐ Select as Final Gift"}),t.jsx("button",{onClick:()=>o(e.id),className:"bg-christmas-red/60 hover:bg-christmas-red text-white font-bold py-2 px-4 rounded-lg transition-all duration-200","aria-label":`Delete ${e.title}`,children:"🗑️"})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"GiftCard",props:{gift:{required:!0,tsType:{name:"Gift"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const d={title:"Components/GiftCard",component:s,tags:["autodocs"],argTypes:{onDelete:{action:"deleted"},onSelect:{action:"selected"}}},i={args:{gift:{id:"1",person_id:"1",title:"New Sleigh",description:"A modern, eco-friendly sleigh with GPS navigation",is_selected:!1,created_at:new Date().toISOString()}}},n={args:{gift:{id:"2",person_id:"1",title:"Comfortable Boots",description:"Warm, waterproof boots for chimney climbing",is_selected:!0,created_at:new Date().toISOString()}}},r={args:{gift:{id:"3",person_id:"1",title:"Premium Cookie Recipe Collection",description:"An extensive collection of cookie recipes from around the world, including traditional favorites and modern innovations. Features step-by-step instructions with beautiful photography.",is_selected:!1,created_at:new Date().toISOString()}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    gift: {
      id: '1',
      person_id: '1',
      title: 'New Sleigh',
      description: 'A modern, eco-friendly sleigh with GPS navigation',
      is_selected: false,
      created_at: new Date().toISOString()
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    gift: {
      id: '2',
      person_id: '1',
      title: 'Comfortable Boots',
      description: 'Warm, waterproof boots for chimney climbing',
      is_selected: true,
      created_at: new Date().toISOString()
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    gift: {
      id: '3',
      person_id: '1',
      title: 'Premium Cookie Recipe Collection',
      description: 'An extensive collection of cookie recipes from around the world, including traditional favorites and modern innovations. Features step-by-step instructions with beautiful photography.',
      is_selected: false,
      created_at: new Date().toISOString()
    }
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","Selected","LongDescription"];export{i as Default,r as LongDescription,n as Selected,l as __namedExportsOrder,d as default};
