(function(e){function t(t){for(var n,o,i=t[0],u=t[1],l=t[2],s=0,b=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0559":function(e,t,r){"use strict";r("6042")},1790:function(e,t,r){"use strict";r("1d6a")},"1d6a":function(e,t,r){},2048:function(e,t,r){},"2ab5":function(e,t,r){e.exports=r.p+"img/success_Icon.6c5149af.svg"},"4a68":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"container"},c={key:0};function o(e,t,r,o,i,u){var l=Object(n["n"])("country-selector"),d=Object(n["n"])("payment-selector"),s=Object(n["n"])("payment-form"),b=Object(n["n"])("payment-success");return Object(n["i"])(),Object(n["d"])("div",a,[Object(n["g"])(n["b"],{name:"slide",mode:"out-in"},{default:Object(n["s"])((function(){return[e.$store.state.paymentSuccessful?(Object(n["i"])(),Object(n["d"])(b,{key:1})):(Object(n["i"])(),Object(n["d"])("div",c,[Object(n["g"])(l),Object(n["g"])(d),e.$store.state.paymentMethodSelected?(Object(n["i"])(),Object(n["d"])(s,{key:0})):Object(n["e"])("",!0)]))]})),_:1})])}var i={class:"payments"},u=Object(n["g"])("h2",null,"Choose payment type",-1),l={class:"payments__wrap"};function d(e,t,r,a,c,o){var d=Object(n["n"])("payment-item");return Object(n["i"])(),Object(n["d"])("section",i,[u,Object(n["g"])("div",l,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(o.getPaymentMethods,(function(t,r){return Object(n["i"])(),Object(n["d"])(d,{key:t.id,item:t,onClick:function(e){return o.selectPaymentMethod(r,t.id)},class:{active:e.$store.state.paymentMethodSelected.index===r}},null,8,["item","onClick","class"])})),128))])])}r("b0c0");var s={class:"payments--card"},b={class:"card__image"};function m(e,t,r,a,c,o){return Object(n["i"])(),Object(n["d"])("div",s,[Object(n["g"])("div",b,[Object(n["g"])("img",{src:r.item.img_url,alt:r.item.name},null,8,["src","alt"])]),Object(n["f"])(" "+Object(n["o"])(r.item.name),1)])}var f={props:["item"]};r("0559");f.render=m;var p=f,v={components:{PaymentItem:p},emits:["paymentMethodSelected"],computed:{getPaymentMethods:function(){return this.$store.state.paymentMethods}},methods:{selectPaymentMethod:function(e,t){var r={id:t,index:e,status:!0};this.$store.dispatch("isPaymentMethodSelected",r)}}};r("db10");v.render=d;var j=v,O=Object(n["v"])("data-v-3b26d4e0");Object(n["k"])("data-v-3b26d4e0");var h={class:"country"},y=Object(n["g"])("div",null,[Object(n["g"])("h2",null,"Choose country")],-1),g={class:"country__wrap"},M=Object(n["g"])("label",{for:""},"Country: ",-1),C={class:"country__current"};Object(n["j"])();var S=O((function(e,t,r,a,c,o){return Object(n["i"])(),Object(n["d"])("section",h,[y,Object(n["g"])("div",g,[M,Object(n["g"])("div",C,[Object(n["g"])("span",{onClick:t[1]||(t[1]=function(){return o.showCountryList&&o.showCountryList.apply(o,arguments)})},Object(n["o"])(o.getCurrentCountry),1),Object(n["g"])("ul",{class:["country__list",o.countryListClass]},[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(o.getCountryList,(function(e){return Object(n["i"])(),Object(n["d"])("li",{key:e.id,onClick:function(t){return o.selectCountry(e)}},Object(n["o"])(e.name),9,["onClick"])})),128))],2)])])])})),k={props:["currentCountry"],data:function(){return{countryListVisible:!1}},computed:{getCountryList:function(){return this.$store.state.countryList},getCurrentCountry:function(){return this.$store.state.country.name},countryListClass:function(){return{active:this.countryListVisible}}},methods:{selectCountry:function(e){this.$store.dispatch("changeCountry",e),this.showCountryList(),this.$store.dispatch("fetchDataFromApi"),this.$store.dispatch("resetForm"),this.$store.dispatch("resetSelectedPaymentMethod")},showCountryList:function(){this.countryListVisible=!this.countryListVisible}}};r("7f91");k.render=S,k.__scopeId="data-v-3b26d4e0";var P=k,N=Object(n["g"])("h2",null,"FIll form",-1),_={class:"form-wrap"};function x(e,t,r,a,c,o){var i=Object(n["n"])("form-group");return Object(n["i"])(),Object(n["d"])("section",null,[Object(n["g"])("form",{onSubmit:t[1]||(t[1]=Object(n["u"])((function(){return o.submitForm&&o.submitForm.apply(o,arguments)}),["prevent"]))},[Object(n["g"])(i,{label:"Enter amount",errorStatus:c.amountError,errorMsg:"Please enter amount",field:"amount"},null,8,["errorStatus"]),N,Object(n["g"])(i,{label:"Cardholder name",errorStatus:c.cardHolderNameError,errorMsg:"Please enter cardholder name",field:"cardHolderName"},null,8,["errorStatus"]),Object(n["g"])(i,{label:"Card number",errorStatus:c.cardNumberError,errorMsg:"Please enter card number",field:"cardNumber"},null,8,["errorStatus"]),Object(n["g"])("div",_,[Object(n["g"])(i,{label:"CVV",errorStatus:c.cvvError,errorMsg:"Please enter CVV",field:"cvv"},null,8,["errorStatus"]),Object(n["g"])(i,{label:"Expiration date",errorStatus:c.expirationError,errorMsg:"Please enter expiration date",field:"expiration"},null,8,["errorStatus"])]),Object(n["g"])("button",null,Object(n["o"])(o.buttonText),1)],32)])}r("159b");var I=Object(n["v"])("data-v-23e121f4");Object(n["k"])("data-v-23e121f4");var F={class:"form-group__relative"},w={key:0},E={key:0},L={key:0},V={key:0,class:"error"},$={class:"form-group__select"},Y=Object(n["g"])("option",{value:"",disabled:"",selected:""},"Month",-1),U=Object(n["g"])("option",{value:"",disabled:"",selected:""},"Year",-1),D={key:0};Object(n["j"])();var T=I((function(e,t,r,a,c,o){return Object(n["i"])(),Object(n["d"])(n["a"],null,["amount"===r.field?(Object(n["i"])(),Object(n["d"])("div",{key:0,class:["form-group form-group--amount",{error:"invalid"===c.validateInput,filled:"valid"===c.validateInput}]},[Object(n["g"])("label",null,Object(n["o"])(r.label),1),Object(n["g"])("div",F,[Object(n["t"])(Object(n["g"])("input",{type:"number",onBlur:t[1]||(t[1]=function(e){return o.validate("amount")}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.amount=e})},null,544),[[n["q"],c.amount,void 0,{number:!0}]]),Object(n["g"])("span",null,Object(n["o"])(e.$store.state.country.currency),1)]),"invalid"===c.validateInput?(Object(n["i"])(),Object(n["d"])("p",w,Object(n["o"])(r.errorMsg),1)):Object(n["e"])("",!0)],2)):Object(n["e"])("",!0),"cardHolderName"===r.field?(Object(n["i"])(),Object(n["d"])("div",{key:1,class:["form-group",{error:"invalid"===c.validateInput,filled:"valid"===c.validateInput}]},[Object(n["g"])("label",null,Object(n["o"])(r.label),1),Object(n["t"])(Object(n["g"])("input",{type:"text",onBlur:t[3]||(t[3]=function(e){return o.validate("vModel")}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.vModel=e}),onKeypress:t[5]||(t[5]=function(e){return o.isLetter(e)})},null,544),[[n["q"],c.vModel]]),"invalid"===c.validateInput?(Object(n["i"])(),Object(n["d"])("p",E,Object(n["o"])(r.errorMsg),1)):Object(n["e"])("",!0)],2)):Object(n["e"])("",!0),"cardNumber"===r.field?(Object(n["i"])(),Object(n["d"])("div",{key:2,class:["form-group",{error:"invalid"===c.validateCardNumber}]},[Object(n["g"])("label",null,Object(n["o"])(r.label),1),Object(n["t"])(Object(n["g"])("input",{type:"number",onBlur:t[6]||(t[6]=function(e){return o.validate("cardNumber")}),"onUpdate:modelValue":t[7]||(t[7]=function(e){return c.cardNumber=e})},null,544),[[n["q"],c.cardNumber]]),"invalid"===c.validateCardNumber?(Object(n["i"])(),Object(n["d"])("p",L,Object(n["o"])(r.errorMsg),1)):Object(n["e"])("",!0)],2)):Object(n["e"])("",!0),"cvv"===r.field?(Object(n["i"])(),Object(n["d"])("div",{key:3,class:["form-group",{error:"invalid"===c.validateInput}]},[Object(n["g"])("label",null,Object(n["o"])(r.label),1),Object(n["t"])(Object(n["g"])("input",{type:"text",onBlur:t[8]||(t[8]=function(e){return o.validate("vModel")}),maxlength:"4","onUpdate:modelValue":t[9]||(t[9]=function(e){return c.vModel=e}),onKeypress:t[10]||(t[10]=function(){return o.onlyNumber&&o.onlyNumber.apply(o,arguments)})},null,544),[[n["q"],c.vModel]]),"invalid"===c.validateInput?(Object(n["i"])(),Object(n["d"])("p",V,Object(n["o"])(r.errorMsg),1)):Object(n["e"])("",!0)],2)):Object(n["e"])("",!0),"expiration"===r.field?(Object(n["i"])(),Object(n["d"])("div",{key:4,class:["form-group",{error:"invalid"===c.validateInput||"invalid"===c.validateExp}]},[Object(n["g"])("label",null,Object(n["o"])(r.label),1),Object(n["g"])("div",$,[Object(n["t"])(Object(n["g"])("select",{"onUpdate:modelValue":t[11]||(t[11]=function(e){return c.cardMonth=e}),onBlur:t[12]||(t[12]=function(e){return o.validate("expiration")}),class:o.cardMonthClass},[Y,(Object(n["i"])(),Object(n["d"])(n["a"],null,Object(n["m"])(12,(function(e){return Object(n["g"])("option",{value:e,disabled:e<o.minCardMonth,key:e},Object(n["o"])(e),9,["value","disabled"])})),64))],34),[[n["p"],c.cardMonth]]),Object(n["t"])(Object(n["g"])("select",{"onUpdate:modelValue":t[13]||(t[13]=function(e){return c.cardYear=e}),onBlur:t[14]||(t[14]=function(e){return o.validate("expiration")}),class:o.cardYearClass},[U,(Object(n["i"])(),Object(n["d"])(n["a"],null,Object(n["m"])(12,(function(e,t){return Object(n["g"])("option",{value:t+c.minCardYear,key:e},Object(n["o"])(t+c.minCardYear),9,["value"])})),64))],34),[[n["p"],c.cardYear]])]),"invalid"===c.validateInput||"invalid"===c.validateExp?(Object(n["i"])(),Object(n["d"])("p",D,Object(n["o"])(r.errorMsg),1)):Object(n["e"])("",!0)],2)):Object(n["e"])("",!0)],64)})),B=(r("ac1f"),r("5319"),{props:["label","errorStatus","field","inputType","errorMsg"],data:function(){return{cardMonth:"",cardYear:"",cardNumber:"",minCardYear:(new Date).getFullYear(),vModel:"",amount:"",validateInput:null,validateCardNumber:null,validateExp:null}},watch:{cardMonth:function(e){this.addFormValue(e,"cardMonth")},cardYear:function(e){this.cardMonth<this.minCardMonth&&(this.cardMonth=""),this.addFormValue(e,"cardYear")},cardNumber:function(e){this.addFormValue(e,"cardNumber")},vModel:function(e){this.addFormValue(e,this.field)},amount:function(e){e>0&&this.addFormValue(e,this.field)},errorStatus:function(e){"cardNumber"===this.field?"invalid"===e&&(this.validateCardNumber="invalid"):"invalid"===e&&(this.validateInput="invalid")}},computed:{minCardMonth:function(){return this.cardYear===this.minCardYear?(new Date).getMonth()+1:1},cardMonthClass:function(){return{filled:""!==this.cardMonth}},cardYearClass:function(){return{filled:""!==this.cardYear}}},methods:{isLetter:function(e){var t=String.fromCharCode(e.keyCode);if(/^[A-Za-z]+$/.test(t)||" "===t)return!0;e.preventDefault()},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46!==t&&e.preventDefault()},addFormValue:function(e,t){var r={name:t,value:e};this.$store.dispatch("updateForm",r)},validate:function(e){if("vModel"===e)""===this.vModel||"0"===this.vModel?this.validateInput="invalid":this.validateInput="valid";else if("expiration"===e)""===this.cardMonth||""===this.cardYear?this.validateExp="invalid":(this.validateExp="valid",this.validateInput="valid");else if("cardNumber"===e){var t=this.cardNumber;if(/[^0-9-\s]+/.test(t))return!1;var r=0,n=!1;t=t.replace(/\D/g,"");for(var a=t.length-1;a>=0;a--){var c=t.charAt(a),o=parseInt(c,10);n&&(o*=2)>9&&(o-=9),r+=o,n=!n}r%10!==0&&16!==t.length||""===t?this.validateCardNumber="invalid":r%10==0&&16==t.length&&(this.validateCardNumber="valid")}else"amount"===e&&(this.amount>0?this.validateInput="valid":this.validateInput="invalid")}}});r("7974");B.render=T,B.__scopeId="data-v-23e121f4";var H=B,A={components:{FormGroup:H},data:function(){return{amountError:null,cardHolderNameError:null,cardNumberError:null,cvvError:null,expirationError:null}},computed:{buttonText:function(){return"Pay "+this.$store.state.form.amount+" "+this.$store.state.country.currency}},methods:{submitForm:function(){var e=this,t=this.$store.getters.isFieldsEmpty;t.length>0?t.forEach((function(t){e[t+"Error"]="invalid"})):this.$store.dispatch("paymentIsSuccessful")}}};r("8a25");A.render=x;var q=A,J=r("2ab5"),K=r.n(J),R=Object(n["v"])("data-v-da1888c2");Object(n["k"])("data-v-da1888c2");var z={class:"form-success"},G=Object(n["g"])("img",{src:K.a},null,-1),Z=Object(n["g"])("h3",null,"Transaction successful",-1);Object(n["j"])();var Q=R((function(e,t){return Object(n["i"])(),Object(n["d"])("section",z,[G,Z])}));r("d874");const W={};W.render=Q,W.__scopeId="data-v-da1888c2";var X=W,ee={components:{PaymentSelector:j,CountrySelector:P,PaymentForm:q,PaymentSuccess:X},created:function(){this.$store.dispatch("fetchDataFromApi")}};r("1790");ee.render=o;var te=ee,re=r("3835"),ne=(r("4fad"),r("5502")),ae=r("bc3a"),ce=r.n(ae),oe=Object(ne["a"])({state:{error:"",paymentSuccessful:!1,country:{id:"LT",name:"Lithuania",currency:"EUR"},countryList:[{id:"LT",name:"Lithuania",currency:"EUR"},{id:"PL",name:"Poland",currency:"PLN"},{id:"US",name:"United States",currency:"USD"}],paymentMethods:"",paymentMethodSelected:"",form:{amount:"",cardHolderName:"",cardNumber:"",cardMonth:"",cardYear:"",cvv:""}},mutations:{changeCountry:function(e,t){e.country=t},isPaymentMethodSelected:function(e,t){e.paymentMethodSelected=t},updateForm:function(e,t){e.form[t.name]=t.value},resetSelectedPaymentMethod:function(e){e.paymentMethodSelected=""},resetForm:function(e){e.form={amount:"",cardHolderName:"",cardNumber:"",cardMonth:"",cardYear:"",cvv:""}},paymentIsSuccessful:function(e){e.paymentSuccessful=!0}},actions:{changeCountry:function(e,t){e.commit("changeCountry",t)},isPaymentMethodSelected:function(e,t){e.commit("isPaymentMethodSelected",t)},fetchDataFromApi:function(){var e=this;ce.a.get("https://api.paymentwall.com/api/payment-systems/?key=0cf8f2cdc8e141213d18b997ba0c35f8&country_code="+this.state.country.id).then((function(t){e.state.paymentMethods=t.data})).catch((function(){e.state.error="Something went wrong"}))},updateForm:function(e,t){e.commit("updateForm",t)},resetForm:function(e){e.commit("resetForm")},resetSelectedPaymentMethod:function(e){e.commit("resetSelectedPaymentMethod")},paymentIsSuccessful:function(e){e.commit("paymentIsSuccessful")}},getters:{isFieldsEmpty:function(e){for(var t=[],r=0,n=Object.entries(e.form);r<n.length;r++){var a=Object(re["a"])(n[r],2),c=a[0],o=a[1];""===o&&(("cardMonth"===c||"cardyear"===c)&&(c="expiration"),t.push(c))}return t}}});Object(n["c"])(te).use(oe).mount("#app")},6042:function(e,t,r){},7974:function(e,t,r){"use strict";r("c294")},"7f91":function(e,t,r){"use strict";r("2048")},8182:function(e,t,r){},"8a25":function(e,t,r){"use strict";r("fafc")},c294:function(e,t,r){},d874:function(e,t,r){"use strict";r("8182")},db10:function(e,t,r){"use strict";r("4a68")},fafc:function(e,t,r){}});
//# sourceMappingURL=app.c372d4dd.js.map