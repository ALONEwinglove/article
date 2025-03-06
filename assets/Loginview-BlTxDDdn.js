import{b as h,m as b,d as y,_ as q,a as k,i as G,c,u as F,e as L,f as H,g as w,o as x,w as o,r as I,n as K,h as P,j as d,k as T,l as A,p as Q,q as W,s as V,t as X,v as Y,x as Z,y as s,z as C,A as U,B as N,C as v,D as z,E as B,F as ee}from"./index-DLJLuZhL.js";import{E as te,a as se}from"./el-form-item-C7AfdQkd.js";import{E as le}from"./el-link-B9XAA_Qu.js";import{E as oe}from"./el-button-D8rHBdV0.js";import{E as ae}from"./el-checkbox-DFNMcOr2.js";import{E as re}from"./el-input-CjoBd18g.js";import"./el-message-Bz_2VSFo.js";import"./_baseClone-778m4n38.js";const ne=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:y([Number,Object]),default:()=>b({})},sm:{type:y([Number,Object]),default:()=>b({})},md:{type:y([Number,Object]),default:()=>b({})},lg:{type:y([Number,Object]),default:()=>b({})},xl:{type:y([Number,Object]),default:()=>b({})}}),D=Symbol("rowContextKey"),ue=k({name:"ElCol"}),pe=k({...ue,props:ne,setup($){const a=$,{gutter:i}=G(D,{gutter:c(()=>0)}),t=F("col"),m=c(()=>{const l={};return i.value&&(l.paddingLeft=l.paddingRight=`${i.value/2}px`),l}),f=c(()=>{const l=[];return["span","offset","pull","push"].forEach(n=>{const r=a[n];L(r)&&(n==="span"?l.push(t.b(`${a[n]}`)):r>0&&l.push(t.b(`${n}-${a[n]}`)))}),["xs","sm","md","lg","xl"].forEach(n=>{L(a[n])?l.push(t.b(`${n}-${a[n]}`)):H(a[n])&&Object.entries(a[n]).forEach(([r,e])=>{l.push(r!=="span"?t.b(`${n}-${r}-${e}`):t.b(`${n}-${e}`))})}),i.value&&l.push(t.is("guttered")),[t.b(),l]});return(l,E)=>(x(),w(T(l.tag),{class:P(d(f)),style:K(d(m))},{default:o(()=>[I(l.$slots,"default")]),_:3},8,["class","style"]))}});var ie=q(pe,[["__file","col.vue"]]);const de=A(ie),fe=["start","center","end","space-around","space-between","space-evenly"],me=["top","middle","bottom"],ce=h({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:fe,default:"start"},align:{type:String,values:me}}),ge=k({name:"ElRow"}),_e=k({...ge,props:ce,setup($){const a=$,i=F("row"),t=c(()=>a.gutter);Q(D,{gutter:t});const m=c(()=>{const l={};return a.gutter&&(l.marginRight=l.marginLeft=`-${a.gutter/2}px`),l}),f=c(()=>[i.b(),i.is(`justify-${a.justify}`,a.justify!=="start"),i.is(`align-${a.align}`,!!a.align)]);return(l,E)=>(x(),w(T(l.tag),{class:P(d(f)),style:K(d(m))},{default:o(()=>[I(l.$slots,"default")]),_:3},8,["class","style"]))}});var be=q(_e,[["__file","row.vue"]]);const ye=A(be),ve={__name:"Loginview",setup($){let a=V(!0);const i=()=>{a.value=!a.value},t=V({username:"",password:"",repassword:""});X(a,()=>{t.value={username:"",password:"",repassword:""}});const m={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:10,message:"用户长度必须为5到10位",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的空字符",trigger:"blur"}],repassword:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的空字符",trigger:"blur"},{validator:(r,e,g)=>{e!==t.value.password?g(new Error("密码输入不一致")):g()},trigger:"blur"}]},f=V(),l=async()=>{await f.value.validate();const r=await ee(t.value);console.log("开始注册",r),r&&r.data.code!=1&&(B({message:"注册成功",type:"success"}),a.value=!a.value)},E=Y(),j=Z(),n=async()=>{try{await f.value.validate();const r=await z(t.value);console.log("开始登录",r),r&&r.data&&r.data.token&&(E.setToken(r.data.token),j.push("/layout"))}catch(r){console.error("登录失败1:",r),B({message:"登录失败x，请检查网络或稍后重试",type:"error"})}};return(r,e)=>{const g=de,u=se,_=re,J=ae,S=oe,R=le,O=te,M=ye;return x(),w(M,{class:"logindiv"},{default:o(()=>[s(g,{span:12,class:"login-pic"}),s(g,{span:6,offset:3,class:"login-page"},{default:o(()=>[d(a)?(x(),w(O,{key:0,ref_key:"form",ref:f,model:t.value,rules:m,"label-width":"auto"},{default:o(()=>[s(u,null,{default:o(()=>e[7]||(e[7]=[C("h1",null,"登录",-1)])),_:1}),s(u,{label:"用户名：",prop:"username"},{default:o(()=>[s(_,{modelValue:t.value.username,"onUpdate:modelValue":e[0]||(e[0]=p=>t.value.username=p),"prefix-icon":d(U),placeholder:"请输入账号"},null,8,["modelValue","prefix-icon"])]),_:1}),s(u,{label:"密码：",prop:"password"},{default:o(()=>[s(_,{type:"password",modelValue:t.value.password,"onUpdate:modelValue":e[1]||(e[1]=p=>t.value.password=p),"prefix-icon":d(N),placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])]),_:1}),s(u,{class:"login-page-setting"},{default:o(()=>[s(J,null,{default:o(()=>e[8]||(e[8]=[v("记住我")])),_:1}),e[9]||(e[9]=C("a",{href:""},"忘记密码",-1))]),_:1}),s(u,{class:"login-page-submit"},{default:o(()=>[s(S,{onClick:n},{default:o(()=>e[10]||(e[10]=[v("登录")])),_:1})]),_:1}),s(u,{class:"login-page-login"},{default:o(()=>[s(R,{type:"info",onClick:e[2]||(e[2]=p=>i())},{default:o(()=>e[11]||(e[11]=[v(" 注册→ ")])),_:1})]),_:1})]),_:1},8,["model"])):(x(),w(O,{key:1,ref_key:"form",ref:f,model:t.value,rules:m,"label-width":"auto"},{default:o(()=>[s(u,null,{default:o(()=>e[12]||(e[12]=[C("h1",null,"注册",-1)])),_:1}),s(u,{label:"用户名：",prop:"username"},{default:o(()=>[s(_,{modelValue:t.value.username,"onUpdate:modelValue":e[3]||(e[3]=p=>t.value.username=p),"prefix-icon":d(U),placeholder:"请输入账号"},null,8,["modelValue","prefix-icon"])]),_:1}),s(u,{label:"密码：",prop:"password"},{default:o(()=>[s(_,{modelValue:t.value.password,"onUpdate:modelValue":e[4]||(e[4]=p=>t.value.password=p),type:"password","prefix-icon":d(N),placeholder:"请输入密码"},null,8,["modelValue","prefix-icon"])]),_:1}),s(u,{label:"密码确认：",prop:"repassword"},{default:o(()=>[s(_,{modelValue:t.value.repassword,"onUpdate:modelValue":e[5]||(e[5]=p=>t.value.repassword=p),"prefix-icon":d(N),placeholder:"请再次输入密码"},null,8,["modelValue","prefix-icon"])]),_:1}),s(u,{class:"login-page-submit"},{default:o(()=>[s(S,{onClick:l},{default:o(()=>e[13]||(e[13]=[v("注册")])),_:1})]),_:1}),s(u,{class:"login-page-login"},{default:o(()=>[s(R,{type:"info",onClick:e[6]||(e[6]=p=>i())},{default:o(()=>e[14]||(e[14]=[v(" ←登录 ")])),_:1})]),_:1})]),_:1},8,["model"]))]),_:1})]),_:1})}}},je=W(ve,[["__scopeId","data-v-dedb40e0"]]);export{je as default};
