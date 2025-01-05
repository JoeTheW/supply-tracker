(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{868:(e,t,a)=>{Promise.resolve().then(a.bind(a,5093))},5093:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var n=a(5155),i=a(2115),s=a(8286),r=a(3209),o=a(8209),d=a(54),l=a(8838),c=a(9784),m=a.n(c);let h=e=>{let{items:t,currentMonth:a,onMonthChange:c}=e,[h,y]=(0,i.useState)(t.reduce((e,t)=>({...e,[t.name]:!0}),{})),u=(0,s.w)(a),w=(0,r.p)(u),v=(0,o.k)({start:u,end:w});if(!t||t.length<=0)return(0,n.jsx)("p",{className:"p-8",children:"Loading..."});let g=e=>{y(t=>({...t,[e]:!t[e]}))};return(0,n.jsxs)("div",{className:m()["month-view"],children:[(0,n.jsxs)("div",{className:m()["month-navigation"],children:[(0,n.jsx)("button",{className:"btn btn-primary btn-outline",onClick:()=>{let e=new Date(a);e.setMonth(a.getMonth()-1),c(e)},children:"<"}),(0,n.jsx)("span",{children:(0,d.GP)(a,"MMMM yyyy")}),(0,n.jsx)("button",{className:"btn btn-primary btn-outline",onClick:()=>{let e=new Date(a);e.setMonth(a.getMonth()+1),c(e)},children:">"})]}),(0,n.jsxs)("div",{className:m()["calendar-grid"],children:[(0,n.jsx)("div",{className:m()["day-names"],children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((e,t)=>(0,n.jsx)("div",{className:"text-center font-bold",children:e},t))}),(0,n.jsx)("div",{className:m().days,children:v.map((e,a)=>{let i=t.filter(e=>h[e.name]).filter(t=>t.dates.some(t=>(0,l.r)(t,e))).map(e=>e.color);return(0,n.jsxs)("div",{className:m().day,children:[(0,n.jsx)("span",{children:(0,d.GP)(e,"d")}),(0,n.jsx)("div",{className:m().dots,children:i.map((e,t)=>(0,n.jsx)("div",{className:m().dot,style:{backgroundColor:e}},t))})]},a)})})]}),(0,n.jsxs)("div",{className:m().key,children:[(0,n.jsx)("h4",{children:"Key"}),t.map((e,t)=>(0,n.jsx)("div",{className:m()["key-item"],children:(0,n.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer",children:[(0,n.jsx)("input",{type:"checkbox",className:"checkbox",checked:h[e.name],onChange:()=>g(e.name)}),(0,n.jsx)("div",{className:m()["color-indicator"],style:{backgroundColor:e.color}}),e.name]})},t))]})]})};var y=a(9159);let u=(e,t)=>{let a=Math.floor(360/t);return"hsl(".concat(e*a%360,", 70%, 50%)")},w=()=>{let[e,t]=(0,i.useState)([]),[a,s]=(0,i.useState)(new Date);return(0,i.useEffect)(()=>{(async()=>{t((await y.A.getInventoryItems()).map((e,t,a)=>{let n=y.A.getDatesForItem(e),i=u(t,a.length);return{name:e.name,color:i,dates:n}}))})()},[]),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsx)(h,{items:e,currentMonth:a,onMonthChange:e=>{s(e)}})})}},9159:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var n=a(733);class i{static getInstance(){return i.instance||(i.instance=new i),i.instance}async initializeDB(){this.db=await (0,n.P2)(this.dbName,1,{upgrade(e){e.objectStoreNames.contains("inventory")||e.createObjectStore("inventory",{keyPath:"name"})}})}async waitForDB(){if(await this.dbReady,!this.db)throw Error("Database is not initialized.")}async getAllItems(e){return await this.waitForDB(),await this.db.getAll(e)}async getAllKeys(e){return await this.waitForDB(),await this.db.getAllKeys(e)}async addItem(e,t){if(await this.waitForDB(),await this.db.get(e,t.name))throw Error("Item already exists in the database");await this.db.put(e,t)}async updateItem(e,t){if(await this.waitForDB(),!await this.db.get(e,t.name))throw Error("Item doesn't exist in the database");await this.db.put(e,t)}async getItemByKey(e,t){return await this.waitForDB(),await this.db.get(e,t)}async deleteItem(e,t){await this.waitForDB(),await this.db.delete(e,t)}constructor(){this.dbName="diabetesMaterialDB",window.indexedDB?this.dbReady=this.initializeDB():(console.warn("IndexedDB is not available in this environment."),this.dbReady=Promise.reject("IndexedDB is not available."))}}let s=i.getInstance();class r{getInventoryItems(){return s.getAllItems("inventory")}async getInventoryItemKeys(){let e=s.getAllKeys("inventory");return(await e).map(e=>e.toString())}storeInventoryItem(e){return s.addItem("inventory",e)}updateInventoryItem(e){return s.updateItem("inventory",e)}deleteInventoryItem(e){return s.deleteItem("inventory",e.name)}getInventoryItem(e){return s.getItemByKey("inventory",e)}getDatesForItem(e){var t;let a=[],n=null!==(t=e.lastUsed)&&void 0!==t?t:new Date;for(let t=1;t<e.quantity;t++)a.push(new Date(n.getTime()+t*e.durationDays*864e5));return a}getNextUseDateForItem(e){var t;return new Date((null!==(t=e.lastUsed)&&void 0!==t?t:new Date).getTime()+864e5*e.durationDays)}getFinalUseDateForItem(e){var t;return new Date((null!==(t=e.lastUsed)&&void 0!==t?t:new Date).getTime()+(e.quantity-1)*e.durationDays*864e5)}getFinalValidDateForItem(e){return new Date(this.getFinalUseDateForItem(e).getTime()+864e5*e.durationDays)}}let o=new r},9784:e=>{e.exports={"month-view":"MonthView_month-view__D0RXv","month-navigation":"MonthView_month-navigation__tfP1J","calendar-grid":"MonthView_calendar-grid__6kreT","day-names":"MonthView_day-names__QVzCj",days:"MonthView_days__KzXGa","day-name":"MonthView_day-name__FR1tF",day:"MonthView_day__rfuJi",dots:"MonthView_dots__WQtLw",dot:"MonthView_dot__Onvg3",key:"MonthView_key__TIRQK","key-item":"MonthView_key-item__CuFq7","color-indicator":"MonthView_color-indicator___XNZk"}}},e=>{var t=t=>e(e.s=t);e.O(0,[311,711,441,517,358],()=>t(868)),_N_E=e.O()}]);