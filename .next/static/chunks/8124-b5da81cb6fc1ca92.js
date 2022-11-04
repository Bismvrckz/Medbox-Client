(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8124],{83234:function(a,b,c){"use strict";c.d(b,{Kn:function(){return t},NI:function(){return r},Yp:function(){return s},lX:function(){return w}});var d=c(67294),e=c(28387),f=c(76734),g=c(15818),h=c(54520),i=c(52494),j=(...a)=>a.filter(Boolean).join(" "),k=a=>a?"":void 0,l=a=>!!a||void 0;function m(...a){return function(b){a.some(a=>(null==a||a(b),null==b?void 0:b.defaultPrevented))}}var[n,o]=(0,e.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,q]=(0,e.k)({strict:!1,name:"FormControlContext"}),r=(0,g.Gp)(function(a,b){let c=(0,g.jC)("Form",a),e=(0,h.Lr)(a),{getRootProps:i,htmlProps:l,...m}=function(a){let{id:b,isRequired:c,isInvalid:e,isDisabled:g,isReadOnly:h,...i}=a,j=(0,d.useId)(),l=b||`field-${j}`,m=`${l}-label`,n=`${l}-feedback`,o=`${l}-helptext`,[p,q]=(0,d.useState)(!1),[r,s]=(0,d.useState)(!1),[t,u]=(0,d.useState)(!1),v=(0,d.useCallback)((a={},b=null)=>({id:o,...a,ref:(0,f.lq)(b,a=>{a&&s(!0)})}),[o]),w=(0,d.useCallback)((a={},b=null)=>({...a,ref:b,"data-focus":k(t),"data-disabled":k(g),"data-invalid":k(e),"data-readonly":k(h),id:a.id??m,htmlFor:a.htmlFor??l}),[l,g,t,e,h,m]),x=(0,d.useCallback)((a={},b=null)=>({id:n,...a,ref:(0,f.lq)(b,a=>{a&&q(!0)}),"aria-live":"polite"}),[n]),y=(0,d.useCallback)((a={},b=null)=>({...a,...i,ref:b,role:"group"}),[i]),z=(0,d.useCallback)((a={},b=null)=>({...a,ref:b,role:"presentation","aria-hidden":!0,children:a.children||"*"}),[]);return{isRequired:!!c,isInvalid:!!e,isReadOnly:!!h,isDisabled:!!g,isFocused:!!t,onFocus:()=>u(!0),onBlur:()=>u(!1),hasFeedbackText:p,setHasFeedbackText:q,hasHelpText:r,setHasHelpText:s,id:l,labelId:m,feedbackId:n,helpTextId:o,htmlProps:i,getHelpTextProps:v,getErrorMessageProps:x,getRootProps:y,getLabelProps:w,getRequiredIndicatorProps:z}}(e),o=j("chakra-form-control",a.className);return d.createElement(p,{value:m},d.createElement(n,{value:c},d.createElement(g.m$.div,{...i({},b),className:o,__css:c.container})))});function s(a){let{isDisabled:b,isInvalid:c,isReadOnly:d,isRequired:e,...f}=t(a);return{...f,disabled:b,readOnly:d,required:e,"aria-invalid":l(c),"aria-required":l(e),"aria-readonly":l(d)}}function t(a){let b=q(),{id:c,disabled:d,readOnly:e,required:f,isRequired:g,isInvalid:h,isReadOnly:i,isDisabled:j,onFocus:k,onBlur:l,...n}=a,o=a["aria-describedby"]?[a["aria-describedby"]]:[];return(null==b?void 0:b.hasFeedbackText)&&(null==b?void 0:b.isInvalid)&&o.push(b.feedbackId),(null==b?void 0:b.hasHelpText)&&o.push(b.helpTextId),{...n,"aria-describedby":o.join(" ")||void 0,id:c??(null==b?void 0:b.id),isDisabled:(d??j)??(null==b?void 0:b.isDisabled),isReadOnly:(e??i)??(null==b?void 0:b.isReadOnly),isRequired:(f??g)??(null==b?void 0:b.isRequired),isInvalid:h??(null==b?void 0:b.isInvalid),onFocus:m(null==b?void 0:b.onFocus,k),onBlur:m(null==b?void 0:b.onBlur,l)}}r.displayName="FormControl",(0,g.Gp)(function(a,b){let c=q(),e=o(),f=j("chakra-form__helper-text",a.className);return d.createElement(g.m$.div,{...null==c?void 0:c.getHelpTextProps(a,b),__css:e.helperText,className:f})}).displayName="FormHelperText";var[u,v]=(0,e.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,g.Gp)((a,b)=>{let c=(0,g.jC)("FormError",a),e=(0,h.Lr)(a),f=q();return(null==f?void 0:f.isInvalid)?d.createElement(u,{value:c},d.createElement(g.m$.div,{...null==f?void 0:f.getErrorMessageProps(e,b),className:j("chakra-form__error-message",a.className),__css:{display:"flex",alignItems:"center",...c.text}})):null}).displayName="FormErrorMessage",(0,g.Gp)((a,b)=>{let c=v(),e=q();if(!(null==e?void 0:e.isInvalid))return null;let f=j("chakra-form__error-icon",a.className);return d.createElement(i.JO,{ref:b,"aria-hidden":!0,...a,__css:c.icon,className:f},d.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var w=(0,g.Gp)(function(a,b){let c=(0,g.mq)("FormLabel",a),e=(0,h.Lr)(a),{className:f,children:i,requiredIndicator:k=d.createElement(x,null),optionalIndicator:l=null,...m}=e,n=q(),o=(null==n?void 0:n.getLabelProps(m,b))??{ref:b,...m};return d.createElement(g.m$.label,{...o,className:j("chakra-form__label",e.className),__css:{display:"block",textAlign:"start",...c}},i,(null==n?void 0:n.isRequired)?k:l)});w.displayName="FormLabel";var x=(0,g.Gp)(function(a,b){let c=q(),e=o();if(!(null==c?void 0:c.isRequired))return null;let f=j("chakra-form__required-indicator",a.className);return d.createElement(g.m$.span,{...null==c?void 0:c.getRequiredIndicatorProps(a,b),__css:e.requiredIndicator,className:f})});x.displayName="RequiredIndicator"},39653:function(a,b,c){"use strict";c.d(b,{qY:function(){return h}});var d=c(67294),e=c(72446);c(20640);var f=e.jU?d.useLayoutEffect:d.useEffect;function g(a,b=[]){let c=(0,d.useRef)(a);return f(()=>{c.current=a}),(0,d.useCallback)((...a)=>{var b;return null==(b=c.current)?void 0:b.call(c,...a)},b)}function h(a={}){let{onClose:b,onOpen:c,isOpen:f,id:h}=a,i=g(c),j=g(b),[k,l]=(0,d.useState)(a.defaultIsOpen||!1),[m,n]=function(a,b){let c=void 0!==a;return[c,c&& void 0!==a?a:b]}(f,k),o=function a(b,c){let e=(0,d.useId)();return(0,d.useMemo)(()=>b||[c,e].filter(Boolean).join("-"),[b,c,e])}(h,"disclosure"),p=(0,d.useCallback)(()=>{m||l(!1),null==j||j()},[m,j]),q=(0,d.useCallback)(()=>{m||l(!0),null==i||i()},[m,i]),r=(0,d.useCallback)(()=>{(n?p:q)()},[n,q,p]);return{isOpen:!!n,onOpen:q,onClose:p,onToggle:r,isControlled:m,getButtonProps:(a={})=>({...a,"aria-expanded":n,"aria-controls":o,onClick:(0,e.v0)(a.onClick,r)}),getDisclosureProps:(a={})=>({...a,hidden:!n,id:o})}}},20979:function(a,b,c){"use strict";c.d(b,{BZ:function(){return o},II:function(){return l},xH:function(){return x}});var d=c(67294),e=c(83234),f=c(15818),g=c(54520),h=c(95336),i=c(28387),j=c(34031),k=c(46076),l=(0,f.Gp)(function(a,b){let{htmlSize:c,...i}=a,j=(0,f.jC)("Input",i),k=(0,g.Lr)(i),l=(0,e.Yp)(k),m=(0,h.cx)("chakra-input",a.className);return d.createElement(f.m$.input,{size:c,...l,__css:j.field,ref:b,className:m})});l.displayName="Input",l.id="Input";var[m,n]=(0,i.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),o=(0,f.Gp)(function(a,b){let c=(0,f.jC)("Input",a),{children:e,className:i,...l}=(0,g.Lr)(a),n=(0,h.cx)("chakra-input__group",i),o={},p=(0,j.W)(e),q=c.field;p.forEach(a=>{c&&(q&&"InputLeftElement"===a.type.id&&(o.paddingStart=q.height??q.h),q&&"InputRightElement"===a.type.id&&(o.paddingEnd=q.height??q.h),"InputRightAddon"===a.type.id&&(o.borderEndRadius=0),"InputLeftAddon"===a.type.id&&(o.borderStartRadius=0))});let r=p.map(b=>{var c,e;let f=(0,k.oA)({size:(null==(c=b.props)?void 0:c.size)||a.size,variant:(null==(e=b.props)?void 0:e.variant)||a.variant});return"Input"!==b.type.id?(0,d.cloneElement)(b,f):(0,d.cloneElement)(b,Object.assign(f,o,b.props))});return d.createElement(f.m$.div,{className:n,ref:b,__css:{width:"100%",display:"flex",position:"relative"},...l},d.createElement(m,{value:c},r))});o.displayName="InputGroup";var p={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},q=(0,f.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),r=(0,f.Gp)(function(a,b){let{placement:c="left",...e}=a,f=p[c]??{},g=n();return d.createElement(q,{ref:b,...e,__css:{...g.addon,...f}})});r.displayName="InputAddon";var s=(0,f.Gp)(function(a,b){return d.createElement(r,{ref:b,placement:"left",...a,className:(0,h.cx)("chakra-input__left-addon",a.className)})});s.displayName="InputLeftAddon",s.id="InputLeftAddon";var t=(0,f.Gp)(function(a,b){return d.createElement(r,{ref:b,placement:"right",...a,className:(0,h.cx)("chakra-input__right-addon",a.className)})});t.displayName="InputRightAddon",t.id="InputRightAddon";var u=(0,f.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),v=(0,f.Gp)(function(a,b){let{placement:c="left",...e}=a,f=n(),g=f.field,h={["left"===c?"insetStart":"insetEnd"]:"0",width:(null==g?void 0:g.height)??(null==g?void 0:g.h),height:(null==g?void 0:g.height)??(null==g?void 0:g.h),fontSize:null==g?void 0:g.fontSize,...f.element};return d.createElement(u,{ref:b,__css:h,...e})});v.id="InputElement",v.displayName="InputElement";var w=(0,f.Gp)(function(a,b){let{className:c,...e}=a,f=(0,h.cx)("chakra-input__left-element",c);return d.createElement(v,{ref:b,placement:"left",className:f,...e})});w.id="InputLeftElement",w.displayName="InputLeftElement";var x=(0,f.Gp)(function(a,b){let{className:c,...e}=a,f=(0,h.cx)("chakra-input__right-element",c);return d.createElement(v,{ref:b,placement:"right",className:f,...e})});x.id="InputRightElement",x.displayName="InputRightElement"},20640:function(a,b,c){"use strict";var d=c(11742),e={"text/plain":"Text","text/html":"Url",default:"Text"};a.exports=function(a,b){var c,f,g,h,i,j,k,l,m,n=!1;b||(b={}),h=b.debug||!1;try{if(j=d(),k=document.createRange(),l=document.getSelection(),m=document.createElement("span"),m.textContent=a,m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",function(c){if(c.stopPropagation(),b.format){if(c.preventDefault(),void 0===c.clipboardData){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=e[b.format]||e.default;window.clipboardData.setData(d,a)}else c.clipboardData.clearData(),c.clipboardData.setData(b.format,a)}b.onCopy&&(c.preventDefault(),b.onCopy(c.clipboardData))}),document.body.appendChild(m),k.selectNodeContents(m),l.addRange(k),!document.execCommand("copy"))throw Error("copy command was unsuccessful");n=!0}catch(o){h&&console.error("unable to copy using execCommand: ",o),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(b.format||"text",a),b.onCopy&&b.onCopy(window.clipboardData),n=!0}catch(p){h&&console.error("unable to copy using clipboardData: ",p),h&&console.error("falling back to prompt"),i=(f="message"in b?b.message:"Copy to clipboard: #{key}, Enter",g=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",f.replace(/#{\s*key\s*}/g,g)),window.prompt(i,a)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(k):l.removeAllRanges()),m&&document.body.removeChild(m),j()}return n}},11742:function(a){a.exports=function(){var a=document.getSelection();if(!a.rangeCount)return function(){};for(var b=document.activeElement,c=[],d=0;d<a.rangeCount;d++)c.push(a.getRangeAt(d));switch(b.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":b.blur();break;default:b=null}return a.removeAllRanges(),function(){"Caret"===a.type&&a.removeAllRanges(),a.rangeCount||c.forEach(function(b){a.addRange(b)}),b&&b.focus()}}},69396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})}}])