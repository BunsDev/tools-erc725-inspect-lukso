(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{7136:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inspect",function(){return t(2024)}])},9366:function(e,s,t){"use strict";t.d(s,{Z:function(){return u}});var r=t(7568),n=t(7582),a=t(7294),c=t(7918),l=t.n(c),i=t(3538);function u(){var e=(0,a.useState)(),s=e[0],t=e[1],c=(0,a.useContext)(i.J).network;return(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)((function(){return(0,n.__generator)(this,(function(e){return[2,new(l())(c.rpc)]}))}));return function(){return e.apply(this,arguments)}}();e().then((function(e){t(e)}))}),[c]),s}},2024:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return w}});var r,n=t(7568),a=t(7582),c=t(5893),l=t(1163),i=t(9008),u=t.n(i),o=t(7294),d=t(8269),h=t(7274),f=t(9062),p=function(e){var s=e.address,t=e.showInspectButton,r=void 0===t||t;return(0,c.jsxs)("div",{className:"buttons is-centered are-small pt-2",children:[(0,c.jsx)("a",{className:"button is-primary is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/".concat(s),children:"View on UP as Profile \ud83e\uddd1\u200d\ud83c\udfa4"}),(0,c.jsx)("a",{className:"button is-info is-light",target:"_blank",rel:"noreferrer",href:"https://universalprofile.cloud/asset/".concat(s),children:"View on UP as Asset \ud83d\udc57"}),(0,c.jsx)("a",{className:"button is-link is-light",target:"_blank",rel:"noreferrer",href:"https://blockscout.com/lukso/l14/address/".concat(s),children:"View on Blockscout \u26d3"}),r&&(0,c.jsx)("a",{className:"button is-link is-light",href:"".concat(window.location.href.split("?")[0],"?address=").concat(s),children:"ERC725 Inspect \ud83d\udd0d"})]})},m=t(6060),v=t(733),y=t(9366),b=function(e){var s=e.address,t=e.erc725JSONSchema,r=e.value,l=(0,o.useState)([]),i=l[0],u=l[1],d=(0,o.useState)({key:"",name:"",value:[]}),h=d[0],f=d[1],b=(0,y.Z)();(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,n,c,l,i;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),s&&void 0!==b?(e=[t],n=new m.pY(e,s,b.currentProvider),c=n.decodeData([{keyName:t.name,value:r}]),u(c),"Array"!==t.keyType?[3,2]:[4,n.getData(t.name)]):[3,2];case 1:l=a.sent(),f(l),a.label=2;case 2:return[3,4];case 3:return i=a.sent(),console.log(i.message),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[s,b]);try{return"string"===typeof i[0].value?"Address"===t.valueContent?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("code",{children:r}),(0,c.jsx)(p,{address:i[0].value})]}):(0,c.jsx)("code",{children:r}):void 0!==h&&Array.isArray(h.value)&&"Array"===t.keyType?0===h.value.length?(0,c.jsx)("span",{className:"help",children:"No array entries found."}):(0,c.jsx)("ul",{children:h.value.map((function(e,s){return(0,c.jsx)("li",{children:(0,c.jsx)("code",{children:e})},s)}))}):"JSONURL"===t.valueContent?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("pre",{children:JSON.stringify(i[0].value,null,4)}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("span",{children:["URL: ",i[0].value.url]})," -"," ",-1!==i[0].value.url.indexOf("ipfs://")&&(0,c.jsxs)(c.Fragment,{children:["[",(0,c.jsx)("a",{className:"has-text-link",target:"_blank",rel:"noreferrer",href:"".concat(v.Dj,"/").concat(i[0].value.url.replace("ipfs://","")),children:"LUKSO IPFS"}),"]"]})]})]}):(0,c.jsx)("div",{children:(0,c.jsx)("pre",{children:JSON.stringify(i[0],null,4)})})}catch(x){return console.warn("Could not decode the key: ",x),(0,c.jsx)("span",{children:"Can't decode this key"})}},x=JSON.parse('[{"name":"LSP1UniversalReceiverDelegate","key":"0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47","keyType":"Singleton","valueType":"address","valueContent":"Address"},{"name":"SupportedStandards:LSP3UniversalProfile","key":"0xeafec4d89fa9619884b60000abe425d64acd861a49b8ddf5c0b6962110481f38","keyType":"Mapping","valueType":"bytes4","valueContent":"0xabe425d6"},{"name":"LSP3Profile","key":"0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5","keyType":"Singleton","valueType":"bytes","valueContent":"JSONURL"},{"name":"LSP5ReceivedAssets[]","key":"0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b","keyType":"Array","valueType":"address","valueContent":"Address"},{"name":"AddressPermissions[]","key":"0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3","keyType":"Array","valueType":"address","valueContent":"Address"},{"name":"LSP10Vaults[]","key":"0x55482936e01da86729a45d2b87a6b1d3bc582bea0ec00e38bdb340e3af6f9f06","keyType":"Array","valueType":"address","valueContent":"Address"},{"name":"LSP12IssuedAssets[]","key":"0x7c8c3416d6cda87cd42c71ea1843df28ac4850354f988d55ee2eaa47b6dc05cd","keyType":"Array","valueType":"address","valueContent":"Address"}]'),g=function(e){var s=e.address,t=e.isErc725Y,r=(0,o.useState)([]),l=r[0],i=r[1],u=(0,y.Z)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,r,n,c;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(!u)return[2];if(!t)return[2];e=[],a.label=1;case 1:return a.trys.push([1,4,,5]),t?(r=x.map((function(e){return e.key})),[4,(0,h.iK)(s,r,u)]):[3,3];case 2:(n=a.sent()).map((function(s,t){e.push({key:r[t],value:n[t],schema:x[t]})})),a.label=3;case 3:return[3,5];case 4:return c=a.sent(),console.error(c),[3,5];case 5:return i(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[s,u,t]),u?s?(0,c.jsx)("div",{className:"columns is-multiline",children:l.map((function(e){return(0,c.jsx)("div",{className:"column is-full",children:(0,c.jsxs)("div",{className:"content py-5",children:[(0,c.jsxs)("h4",{className:"title is-4",children:[e.schema.name," ",(0,c.jsx)(f.Z,{label:e.schema.keyType,color:"success",variant:"outlined",size:"small"})]}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:["Key: ",(0,c.jsx)("code",{children:e.schema.key})]}),(0,c.jsxs)("li",{children:["Raw value"," ",(0,c.jsx)("span",{className:"tag is-link is-light",children:e.schema.valueType}),": ",(0,c.jsx)("code",{children:e.value})]}),(0,c.jsxs)("li",{children:["Decoded value"," ",(0,c.jsx)("span",{className:"tag is-link is-light",children:e.schema.valueContent}),":"," ",(0,c.jsx)(b,{address:s,erc725JSONSchema:e.schema,value:e.value})]}),"MappingWithGrouping"===e.schema.keyType&&(0,c.jsxs)("li",{children:["Mapped address:"," ",(0,c.jsxs)("code",{children:["0x",e.schema.name.split(":").pop()]})," ",(0,c.jsx)(p,{address:"0x".concat(e.schema.name.split(":").pop())})]})]})]})},e.key)}))}):(0,c.jsx)("p",{children:"\u2b06\ufe0f enter the address of your UP"}):(0,c.jsx)("p",{children:"error: could not load provider"})},j=t(1304),k=[{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],S=t(4030);!function(e){e.KeyManager="Key Manager",e.SmartContract="Smart Contract",e.EOA="EOA"}(r||(r={}));var N=function(e){var s=e.UPAddress,t=(0,o.useState)(""),l=t[0],i=t[1],u=(0,o.useState)(),h=u[0],f=u[1],p=(0,y.Z)(),m=function(){var e=(0,n.Z)((function(e){var s,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(!p)return console.error("Web3 is not initialized"),[2];s=new p.eth.Contract(k,e),t=!1,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,s.methods.supportsInterface(S.Bj.LSP6KeyManager).call()];case 2:return t=a.sent(),[3,4];case 3:return n=a.sent(),console.warn(n.message),[3,4];case 4:return f(t?r.KeyManager:r.SmartContract),[2]}}))}));return function(s){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)((function(e){var s;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:if(!p)return console.error("Web3 is not initialized"),[2];t.label=1;case 1:return t.trys.push([1,4,,5]),[4,p.eth.getCode(e)];case 2:return"0x"===t.sent()?(f(r.EOA),[2]):[4,m(e)];case 3:return t.sent(),[3,5];case 4:return s=t.sent(),console.log(s),[3,5];case 5:return[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){if(p&&s&&(0,d.isAddress)(s)){var e=new p.eth.Contract(j.Mt,s),t=function(){var s=(0,n.Z)((function(){var s;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,e.methods.owner().call().then((function(e){i(e),v(e)}))];case 1:return t.sent(),[3,3];case 2:return s=t.sent(),console.log(s),[3,3];case 3:return[2]}}))}));return function(){return s.apply(this,arguments)}}();t()}}),[s,p]),(0,c.jsx)("div",{className:"columns is-multiline",children:(0,c.jsx)("div",{className:"column is-full",children:(0,c.jsxs)("div",{className:"content pt-5",children:[(0,c.jsx)("h4",{className:"title is-4",children:"Owner"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:["Owner address"," ",(0,c.jsx)("span",{className:"tag is-link is-light",children:"address"}),":"," ",(0,c.jsx)("code",{children:l})]}),(0,c.jsxs)("li",{children:["Owner type: ",(0,c.jsx)("strong",{children:h})]})]})]})})})},w=function(){var e=(0,l.useRouter)(),s=(0,y.Z)(),t=(0,o.useState)(!1),r=t[0],i=t[1],f=(0,o.useState)(""),m=f[0],v=f[1],b=(0,o.useState)(!1),x=b[0],j=b[1],k=(0,o.useState)(!1),S=k[0],w=k[1],E=(0,o.useState)(!1),C=E[0],_=E[1],A=(0,o.useState)(!1),L=A[0],P=A[1],T=(0,o.useState)(!1),R=T[0],I=T[1],D=(0,o.useState)(!1),O=D[0],M=D[1],Z=(0,o.useState)(!1),U=Z[0],B=Z[1],K=(0,o.useState)(!1),Y=K[0],J=K[1],F=(0,o.useState)(!1),V=F[0],X=F[1],q=(0,o.useState)(""),z=q[0],W=q[1];(0,o.useEffect)((function(){e.query.address&&v(e.query.address)}),[e.query.address]),(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)((function(){var t;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return s?(j(!1),w(!1),W(""),(0,d.isAddress)(m)?(e.push("/inspect?address=".concat(m)),i(!0),[4,(0,h.DE)(m,s)]):(W("Address is not valid"),[2])):[2];case 1:return t=r.sent(),j(t.isErc725X),w(t.isErc725Y),_(t.isErc1271),P(t.isLsp0Erc725Account),I(t.isLsp1UniversalReceiver),M(t.isLsp6KeyManager),B(t.isLsp7DigitalAsset),J(t.isLsp8IdentifiableDigitalAsset),X(t.isLsp9Vault),i(!1),[2]}}))}));return function(){return t.apply(this,arguments)}}();t()}),[m,s,z]);var G=function(){return x||S||R||O||L?(0,c.jsxs)("div",{className:"help is-success inspect-result",children:[(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!x&&"is-outlined"),href:"https://docs.lukso.tech/standards/universal-profile/lsp0-erc725account#erc725x---generic-executor",target:"_blank",rel:"noreferrer",children:"ERC725X"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!S&&"is-outlined"),href:"https://docs.lukso.tech/standards/universal-profile/lsp0-erc725account#erc725y---generic-key-value-store",target:"_blank",rel:"noreferrer",children:"ERC725Y"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!C&&"is-outlined"),href:"https://eips.ethereum.org/EIPS/eip-1271",target:"_blank",rel:"noreferrer",children:"ERC1271"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!L&&"is-outlined"),href:"https://docs.lukso.tech/standards/universal-profile/lsp0-erc725account#erc725y---generic-key-value-store",target:"_blank",rel:"noreferrer",children:"LSP0ERC725Account"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!R&&"is-outlined"),href:"https://docs.lukso.tech/standards/generic-standards/lsp1-universal-receiver",target:"_blank",rel:"noreferrer",children:"LSP1UniversalReceiver"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!O&&"is-outlined"),href:"https://docs.lukso.tech/standards/universal-profile/lsp6-key-manager",target:"_blank",rel:"noreferrer",children:"LSP6KeyManager"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!U&&"is-outlined"),href:"https://docs.lukso.tech/standards/nft-2.0/LSP7-Digital-Asset",target:"_blank",rel:"noreferrer",children:"LSP7DigitalAsset"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!Y&&"is-outlined"),href:"https://docs.lukso.tech/standards/nft-2.0/LSP8-Identifiable-Digital-Asset",target:"_blank",rel:"noreferrer",children:"LSP8IdentifiableDigitalAsset"}),(0,c.jsx)("a",{className:"button is-link mr-2 mt-2 ".concat(!V&&"is-outlined"),href:"https://docs.lukso.tech/standards/universal-profile/lsp9-vault",target:"_blank",rel:"noreferrer",children:"LSP9Vault"})]}):(0,c.jsxs)("div",{className:"help is-danger inspect-result",children:[(0,c.jsx)("p",{children:"This address is not a valid ERC725 Profile, nor it is a valid LSP contract."}),(0,c.jsx)("p",{children:"Please check if the address is correct."})]})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u(),{children:(0,c.jsx)("title",{children:"Inspect - ERC725 Tools"})}),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("article",{className:"message is-info",children:(0,c.jsxs)("div",{className:"message-body",children:["This tool will fetch all data keys of"," ",(0,c.jsx)("a",{href:"https://github.com/ERC725Alliance/ERC725",children:"ERC725Y"})," smart contract and attempt to match them with their"," ",(0,c.jsx)("a",{href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-2-ERC725YJSONSchema.md",children:"LSP2 ERC725YJSONSchema"}),".",(0,c.jsx)("br",{}),"The erc725.js lib provides a"," ",(0,c.jsx)("a",{href:"https://docs.lukso.tech/tools/erc725js/classes/ERC725#getschema",children:"getSchema"})," ","method to decode the keys."]})}),(0,c.jsx)("div",{className:"columns",children:(0,c.jsx)("div",{className:"column is-half",children:(0,c.jsxs)("div",{className:"field",children:[(0,c.jsx)("label",{className:"label",children:"Contract address"}),(0,c.jsx)("div",{className:"control mb-0",children:(0,c.jsx)("input",{className:"input",type:"text",placeholder:"0xb8E120e7e5EAe7bfA629Db5CEFfA69C834F74e99",value:m,onChange:function(e){v(e.target.value)}})}),(0,c.jsx)("div",{className:"columns",children:(0,c.jsx)("div",{className:"column is-one-half",children:z?(0,c.jsx)("div",{className:"help is-danger",children:z}):(0,c.jsx)(G,{})})})]})})}),(0,c.jsx)("div",{className:"container is-fluid",children:(0,c.jsx)("div",{className:"columns is-vcentered",children:(0,c.jsx)("div",{className:"column is-offset-one-quarter is-half has-text-centered",children:!z&&(0,c.jsx)(p,{address:m,showInspectButton:!1})})})}),(0,c.jsx)("div",{className:"container is-fluid",children:!z&&!r&&(0,c.jsxs)(c.Fragment,{children:[x&&(0,c.jsx)(N,{UPAddress:m}),(0,c.jsx)(g,{address:m,isErc725Y:S})]})})]})]})}},7274:function(e,s,t){"use strict";t.d(s,{DE:function(){return u},Yu:function(){return i},iK:function(){return l}});var r=t(7568),n=t(7582),a=t(1304),c=t(4030),l=function(){var e=(0,r.Z)((function(e,s,t){var r,c,l;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:r=new t.eth.Contract(a.Mt,e),c=[],n.label=1;case 1:return n.trys.push([1,3,,4]),[4,r.methods.getDataBatch(s).call()];case 2:return c=n.sent(),[3,4];case 3:return l=n.sent(),console.log(l.message),[3,4];case 4:return[2,c]}}))}));return function(s,t,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)((function(e,s,t){var r,c,l;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:r=new t.eth.Contract(a.Mt,e),c=null,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,r.methods.getData(s).call()];case 2:return c=n.sent(),[3,4];case 3:return l=n.sent(),console.log(l.message),[3,4];case 4:return[2,c]}}))}));return function(s,t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)((function(e,s){var t,r,a,l,i,u,o,d,h,f,p,m,v,y,b,x,g,j,k;return(0,n.__generator)(this,(function(n){switch(n.label){case 0:t=new s.eth.Contract([{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"supportsInterface",inputs:[{type:"bytes4",name:"interfaceId",internalType:"bytes4"}]}],e),r=!1,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.methods.supportsInterface(c.Bj.ERC725X).call()];case 2:return r=n.sent(),[3,4];case 3:return a=n.sent(),console.log(a.message),[3,4];case 4:l=!1,n.label=5;case 5:return n.trys.push([5,7,,8]),[4,t.methods.supportsInterface(c.Bj.ERC725Y).call()];case 6:return l=n.sent(),[3,8];case 7:return i=n.sent(),console.warn(i.message),[3,8];case 8:u=!1,n.label=9;case 9:return n.trys.push([9,11,,12]),[4,t.methods.supportsInterface(c.Bj.ERC1271).call()];case 10:return u=n.sent(),[3,12];case 11:return o=n.sent(),console.warn(o.message),[3,12];case 12:d=!1,n.label=13;case 13:return n.trys.push([13,15,,16]),[4,t.methods.supportsInterface(c.Bj.LSP0ERC725Account).call()];case 14:return d=n.sent(),[3,16];case 15:return h=n.sent(),console.warn(h.message),[3,16];case 16:f=!1,n.label=17;case 17:return n.trys.push([17,19,,20]),[4,t.methods.supportsInterface(c.Bj.LSP1UniversalReceiver).call()];case 18:return f=n.sent(),[3,20];case 19:return p=n.sent(),console.warn(p.message),[3,20];case 20:m=!1,n.label=21;case 21:return n.trys.push([21,23,,24]),[4,t.methods.supportsInterface(c.Bj.LSP6KeyManager).call()];case 22:return m=n.sent(),[3,24];case 23:return v=n.sent(),console.warn(v.message),[3,24];case 24:y=!1,n.label=25;case 25:return n.trys.push([25,27,,28]),[4,t.methods.supportsInterface(c.Bj.LSP7DigitalAsset).call()];case 26:return y=n.sent(),[3,28];case 27:return b=n.sent(),console.warn(b.message),[3,28];case 28:x=!1,n.label=29;case 29:return n.trys.push([29,31,,32]),[4,t.methods.supportsInterface(c.Bj.LSP8IdentifiableDigitalAsset).call()];case 30:return x=n.sent(),[3,32];case 31:return g=n.sent(),console.warn(g.message),[3,32];case 32:j=!1,n.label=33;case 33:return n.trys.push([33,35,,36]),[4,t.methods.supportsInterface(c.Bj.LSP9Vault).call()];case 34:return j=n.sent(),[3,36];case 35:return k=n.sent(),console.warn(k.message),[3,36];case 36:return[2,{isErc725X:r,isErc725Y:l,isErc1271:u,isLsp0Erc725Account:d,isLsp1UniversalReceiver:f,isLsp6KeyManager:m,isLsp7DigitalAsset:y,isLsp8IdentifiableDigitalAsset:x,isLsp9Vault:j}]}}))}));return function(s,t){return e.apply(this,arguments)}}()},6601:function(){},9214:function(){},5568:function(){},2361:function(){},4616:function(){}},function(e){e.O(0,[543,0,60,778,918,774,888,179],(function(){return s=7136,e(e.s=s);var s}));var s=e.O();_N_E=s}]);