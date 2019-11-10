!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=16)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},function(e,t,o){var n=o(18),a=o(9);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},function(e,t,o){var n=o(19);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t){e.exports=React},function(e,t){e.exports=Core},function(e,t){e.exports=PropTypes},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(o(22)).default)({SECTION_TITLE_REND:null,FORM_DESC_REND:null,CONFIRM_TEXT_REND:null,CONFIRM_DESC_REND:null,SUBSCRIBE_LABEL_REND:null,PLACEHOLDER_TEXT_REND:null,VERIFICATION_TEXT_REND:null,SUBSCRIBE_INNER_FORM_REND:null,SUBSCRIBE_EMAIL_ERR_REND:null,SUBSCRIBE_SUBMIT_BUTTON_REND:null,SECTION_BACKGROUND:null,COUPON_DESC_REND:null,COUPON_CODE_REND:null,COUPON_CODE_FETCHING:null});t.default=a,e.exports=t.default},function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o.apply(this,arguments)}e.exports=o},function(e,t){function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;var t=o();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}}return n.default=e,t&&t.set(e,n),n}},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(11)),r=n(o(1)),i=n(o(2)),l=n(o(3)),u=n(o(4)),s=n(o(9)),d=n(o(5)),f=n(o(8)),c=n(o(6)),p=o(7),m=n(o(21)),v=function(e){function t(e){var o;return(0,r.default)(this,t),(o=(0,l.default)(this,(0,u.default)(t).call(this,e))).onSubmit=o.onSubmit.bind((0,s.default)(o)),o._fields={},o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"validateForm",value:function(){var e=this;return Object.keys(this._fields).map(function(t){return e._fields[t]}).every(function(e){return e.validate()})}},{key:"buildRequestBody",value:function(){var e=this,t=this.props,o=t.accountId,n=t.locale,a=[];return Object.keys(this._fields).forEach(function(t){var o=e._fields[t].getDataForSubmission();o&&a.push(o)}),{accountId:o,locale:n,formData:a}}},{key:"sendForm",value:function(e){var t=this.props.formSubmitHost;if(!t)return!1;var o=new XMLHttpRequest;return o.open("POST","".concat(t,"/v1/subscriber")),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.onreadystatechange=this.handleSubmitResponse,o.send(JSON.stringify(e)),!0}},{key:"validateAndSend",value:function(){if(this.validateForm()){var e=this.buildRequestBody();this.sendForm(e),this.props.onSubmit()}}},{key:"onSubmit",value:function(e){e.preventDefault(),this.validateAndSend()}},{key:"renderFormField",value:function(e,t){var o=this,n=this.props.formFields[e],r={};return this.props.formFieldVariationOptions&&this.props.formFieldVariationOptions[n.type]&&(r=this.props.formFieldVariationOptions[n.type]),c.default.createElement(m.default,(0,a.default)({ref:function(e){return o._fields[n.fieldId]=e},key:e},n,{label:t},r))}},{key:"render",value:function(){var e=p.UX2.Element.Block,t=p.UX2.Group.Form,o=this.props,n=o.inputPlaceholder,a=o.subscribeButtonLabel,r=o.staticContent.defaultButtonLabel,i=a||r,l=n,u=this.renderFormField(0,l),s=this.renderFormField(1,i),d={form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center","@md":{flexDirection:"row"}},input:{marginBottom:"medium",width:"100%","@md":{flexGrow:"1",width:"auto",marginRight:"medium",marginBottom:"0"}},button:{width:"100%","@md":{width:"auto"}}};return c.default.createElement(t,{tag:"form",onSubmit:this.onSubmit,style:d.form},c.default.createElement(e,{"data-route":"inputPlaceholder",style:d.input},u),c.default.createElement(e,{"data-route":"subscribeButtonLabel",style:d.button},s))}}]),t}(c.default.Component);v.defaultProps={staticContent:{}},v.propTypes={accountId:f.default.string,formSubmitHost:f.default.string,category:f.default.string,formSuccessMessage:f.default.string,formFields:f.default.array,formFieldVariationOptions:f.default.object,onSubmit:f.default.func,subscribeButtonLabel:f.default.string,inputPlaceholder:f.default.string,staticContent:f.default.object,locale:f.default.string.isRequired};var h=v;t.default=h,e.exports=t.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{type:"EMAIL",fieldId:"d7s9fy9s-18hf-sdfh-9f94-d1ns893k83d3",label:"Email Address",validation:"email"},{type:"SUBMIT",label:"Sign Up",fieldId:"sd9s93d9-fm07-3611-958f-ns85ri04wo23"}],e.exports=t.default},function(e,t,o){"use strict";var n=o(12),a=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.VerificationText=t.SuccessMessage=void 0;var r=a(o(1)),i=a(o(2)),l=a(o(3)),u=a(o(4)),s=a(o(5)),d=n(o(6)),f=a(o(8)),c=a(o(10)),p=o(7),m=a(o(28)),v={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",marginHorizontal:"auto",maxWidth:"90%","@md":{maxWidth:"80%"}},verification:{wordWrap:"break-word",marginBottom:"medium"},success:{wordWrap:"break-word",marginBottom:"medium"},couponContainer:{justifyContent:"center",display:"flex"},coupon:{wordWrap:"break-word",marginBottom:"medium",padding:"xxsmall",border:"dashed 2px"}},h=function(e){var t=e.enable,o=e.message;if(!t)return null;var n={style:v.success,tag:"p","data-aid":c.default.CONFIRM_TEXT_REND,"data-route":"confirmationMessage"};return d.default.createElement(p.UX2.Element.Text.Major,n,o)};t.SuccessMessage=h,h.propTypes={enable:f.default.bool,message:f.default.string};var g=function(e){var t=e.enable,o=e.text;return t?d.default.createElement(p.UX2.Element.Text,{style:v.verification,"data-aid":c.default.CONFIRM_DESC_REND},o):null};t.VerificationText=g,g.propTypes={enable:f.default.bool,text:f.default.string};var b=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.formSuccessMessage,o=e.verificationText,n=e.showCoupon,a=e.olsConfigHost;return d.default.createElement(p.UX2.Group.Group,{style:v.container},d.default.createElement(h,{enable:!!t,message:t}),d.default.createElement(g,{enable:!n,text:o}),n?d.default.createElement(m.default,{olsConfigHost:a}):null)}}]),t}(d.PureComponent);t.default=b,b.propTypes={formSuccessMessage:f.default.string,category:f.default.string,verificationText:f.default.string,showCoupon:f.default.bool,olsConfigHost:f.default.string},b.defaultProps={formSuccessMessage:"",category:"",verificationText:"",showCoupon:!1,olsConfigHost:""}},function(e,t,o){"use strict";window.wsb=window.wsb||{},window.wsb.SubscribeForm2=o(17)},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(11)),r=n(o(1)),i=n(o(2)),l=n(o(3)),u=n(o(4)),s=n(o(5)),d=o(7),f=n(o(6)),c=n(o(20)),p=n(o(10)),m=n(o(15)),v=n(o(14)),h=n(o(13)),g=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.confirmationMessage,o=e.isInternalPage,n=e.order,r=e.section,i=e.sectionTitle,l=e.staticContent,u=e.category,s=e.couponConfirmationMessage,c=l.emailErrorMessage,g=l.verificationText,b=d.UX2.Element.Block;if(this.state.formSubmitted)return f.default.createElement(b,{category:u,section:r},f.default.createElement(m.default,{formSuccessMessage:this.shouldShowCoupon()?s:t,verificationText:g,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon()}));var y={SUBMIT:{display:"block",paddingVertical:"small"},EMAIL:{errorMessage:c}},E={container:{display:"block","@md":{display:"flex",alignItems:"center"}},title:{marginBottom:"small","@md":{marginRight:"medium",marginBottom:"0"}}};return f.default.createElement(f.default.Fragment,null,f.default.createElement(b,{category:u,section:r,style:E.container},f.default.createElement(b,{style:E.title},this.renderSectionTitle(i,o,n)),f.default.createElement(b,{style:{flexGrow:"1"},"data-aid":p.default.SUBSCRIBE_INNER_FORM_REND},f.default.createElement(h.default,(0,a.default)({formFieldVariationOptions:y,formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit,formFields:v.default,paddingHorizontal:"xsmall"},this.props)))),f.default.createElement(d.UX2.Component.Grid,{inset:!0,style:{paddingTop:"large"}},this.shouldShowCoupon()&&this.renderDescriptionSection({forceCouponDescription:!0})))}}]),t}(c.default);t.default=g,e.exports=t.default},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?e.exports=n=function(e){return o(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)},n(t)}e.exports=n},function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},function(e,t,o){"use strict";var n=o(12),a=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(o(11)),i=a(o(1)),l=a(o(2)),u=a(o(3)),s=a(o(4)),d=a(o(9)),f=a(o(5)),c=n(o(6)),p=a(o(8)),m=a(o(13)),v=a(o(10)),h=o(7),g=a(o(14)),b=a(o(15)),y=a(o(29)),E=function(e){function t(e){var o;return(0,i.default)(this,t),(o=(0,u.default)(this,(0,s.default)(t).call(this,e))).state={formSubmitted:!1},o.onSubmit=o.onSubmit.bind((0,d.default)(o)),o}return(0,f.default)(t,e),(0,l.default)(t,[{key:"onSubmit",value:function(){this.setState({formSubmitted:!0})}},{key:"renderDescriptionSection",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).forceCouponDescription,t=void 0!==e&&e,o=this.props,n=o.description,a=o.couponDescription,r=t||this.shouldShowCoupon(),i=r?a:n;return i?c.default.createElement(h.UX2.Element.Text,{style:{wordWrap:"break-word",textAlign:"center",marginBottom:"small"},"data-aid":v.default.FORM_DESC_REND,"data-route":r?"couponDescription":"description"},i):null}},{key:"renderSectionTitle",value:function(e,t,o){return e?c.default.createElement(h.UX2.Element.Heading.Middle,{"data-aid":v.default.SECTION_TITLE_REND,"data-route":"sectionTitle",isInternalPage:t,order:o,style:{wordWrap:"break-word",textAlign:"center"}},e):null}},{key:"getFormSubmitHost",value:function(){var e=this.props.env;return(y.default&&y.default[e]||{}).formSubmitHost}},{key:"getOlsConfigHost",value:function(){var e=this.props,t=e.env,o=e.renderMode,n=e.websiteId,a=y.default&&y.default[t]||{};return(("PUBLISH"===o?a.olsPublishedSiteHost:a.olsHost)||"").replace("{websiteId}",n)}},{key:"shouldShowCoupon",value:function(){var e=this.props,t=e.hasNonCommercePlan,o=e.couponToggleHidden,n=e.couponToggle;return Boolean(!t&&!o&&n)}},{key:"render",value:function(){var e=this.props,t=e.category,o=e.section,n=e.confirmationMessage,a=e.staticContent,i=e.couponConfirmationMessage,l=a.verificationText,u=a.emailErrorMessage;if(this.state.formSubmitted)return c.default.createElement(h.UX2.Base,{category:t,section:o},c.default.createElement(b.default,{formSuccessMessage:this.shouldShowCoupon()?i:n,verificationText:l,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon()}));var s={SUBMIT:{display:"block",paddingVertical:"small"},EMAIL:{errorMessage:u}},d=h.UX2.Component.Grid;return c.default.createElement(h.UX2.Base,{category:t,section:o},c.default.createElement(d,{bottom:!1,"data-aid":v.default.SUBSCRIBE_INNER_FORM_REND,inset:!0},c.default.createElement(d.Cell,null,this.renderDescriptionSection(),c.default.createElement(m.default,(0,r.default)({formFieldVariationOptions:s,formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit,formFields:g.default},this.props)))))}}]),t}(c.Component);t.default=E,E.propTypes={category:p.default.string,formTitle:p.default.string,section:p.default.string,confirmationMessage:p.default.string,description:p.default.string,env:p.default.string,renderMode:p.default.string.isRequired,websiteId:p.default.string.isRequired,staticContent:p.default.object,locale:p.default.string,hasNonCommercePlan:p.default.boolean,couponToggleHidden:p.default.boolean,couponToggle:p.default.boolean,couponDescription:p.default.string,couponConfirmationMessage:p.default.string},e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(11)),r=n(o(1)),i=n(o(2)),l=n(o(3)),u=n(o(4)),s=n(o(9)),d=n(o(5)),f=n(o(8)),c=n(o(6)),p=o(7),m=n(o(10)),v=n(o(23)),h=n(o(24)),g={position:"static","@md":{position:"absolute"}},b=function(e){function t(e){var o;return(0,r.default)(this,t),(o=(0,l.default)(this,(0,u.default)(t).call(this,e))).displayName="FieldWithValidation",o.state={isValid:!0},o.validate=o.validate.bind((0,s.default)(o)),o.getDataForSubmission=o.getDataForSubmission.bind((0,s.default)(o)),o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"validate",value:function(){var e=!0,t=this.props.validation;return t&&(e=v.default[t].regex.test(this._field.state.value),this.setState({isValid:e})),e}},{key:"getDataForSubmission",value:function(){var e=this.props,t=e.fieldId,o=e.label;return"SUBMIT"===e.type?null:{fieldId:t,label:o,value:this._field.state.value}}},{key:"render",value:function(){var e=this,t=this.state.isValid;return c.default.createElement(p.UX2.Element.Block,{style:{position:"relative"}},c.default.createElement(h.default,(0,a.default)({ref:function(t){return e._field=t}},this.props,{placeholder:this.props.label+(this.props.required?"*":"")})),!t&&c.default.createElement(p.UX2.Element.Error,{style:g,"data-aid":m.default.SUBSCRIBE_EMAIL_ERR_REND,alert:!0},this.props.errorMessage))}}]),t}(c.default.Component);b.propTypes={fieldId:f.default.string,label:f.default.string.isRequired,required:f.default.bool,validation:f.default.string,type:f.default.string,errorMessage:f.default.string};var y=b;t.default=y,e.exports=t.default},function(e,t){e.exports=keyMirror},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={email:{regex:/^([a-zA-Z0-9_\-.+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i}},e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(11)),r=n(o(1)),i=n(o(2)),l=n(o(3)),u=n(o(4)),s=n(o(9)),d=n(o(5)),f=n(o(8)),c=n(o(6)),p=n(o(25)),m=function(e){function t(e){var o;return(0,r.default)(this,t),(o=(0,l.default)(this,(0,u.default)(t).call(this,e))).handleChange=o.handleChange.bind((0,s.default)(o)),o.state={value:""},o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.value,t=p.default[this.props.type];return c.default.createElement(t,(0,a.default)({handleChange:this.handleChange,value:e},this.props))}}]),t}(c.default.Component);m.propTypes={fieldId:f.default.string.isRequired,type:f.default.string.isRequired};var v=m;t.default=v,e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(26)),r=n(o(27)),i={SINGLE_LINE:a.default,EMAIL:a.default,SUBMIT:r.default};t.default=i,e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(1)),r=n(o(2)),i=n(o(3)),l=n(o(4)),u=n(o(5)),s=n(o(8)),d=n(o(6)),f=o(7),c=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.handleChange,o=e.name,n=e.placeholder,a=e.fieldId,r=e.value;return d.default.createElement(f.UX2.Element.Input.FloatLabel,{onChange:t,name:o,placeholder:n,"data-aid":a,value:r})}}]),t}(d.default.Component);c.propTypes={handleChange:s.default.func.isRequired,name:s.default.string,placeholder:s.default.string,fieldId:s.default.string,value:s.default.string};var p=c;t.default=p,e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(1)),r=n(o(2)),i=n(o(3)),l=n(o(4)),u=n(o(5)),s=n(o(8)),d=n(o(6)),f=n(o(10)),c=o(7),p=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.label,t=(0,c.UX2.utils.TCCLUtils.getTCCLString)({eid:"ux2.gem-subscribe.submit_form.click",type:"click"});return d.default.createElement(c.UX2.Element.Button,{tag:"button",type:"submit","data-tccl":t,"data-aid":f.default.SUBSCRIBE_SUBMIT_BUTTON_REND},e)}}]),t}(d.default.Component);p.propTypes={label:s.default.string.isRequired,renderMode:s.default.string,width:s.default.string,display:s.default.string,paddingVertical:s.default.string,paddingHorizontal:s.default.string};var m=p;t.default=m,e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(1)),r=n(o(2)),i=n(o(3)),l=n(o(4)),u=n(o(9)),s=n(o(5)),d=n(o(6)),f=n(o(8)),c=o(7),p=n(o(10)),m=c.UX2.Element,v=m.Block,h=m.Text,g=m.Loader,b={verification:{wordWrap:"break-word",marginBottom:"medium"},couponContainer:{justifyContent:"center",display:"flex"},coupon:{wordWrap:"break-word",marginBottom:"medium",padding:"xxsmall",border:"dashed 2px"}},y=function(){return d.default.createElement(g,{"data-aid":p.default.COUPON_CODE_FETCHING,size:"medium",style:{marginTop:"xlarge",opacity:"0.5"}})},E=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,i.default)(this,(0,l.default)(t).call(this,e))).state={code:null,description:null,loaded:!1},o.loadCouponData=o.loadCouponData.bind((0,u.default)(o)),o}return(0,s.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.loadCouponData()}},{key:"loadCouponData",value:function(){var e=this,t=this.props.olsConfigHost;if(t){var o=new XMLHttpRequest,n=new Date;o.open("GET","".concat(t,"/api/v3/config?ts=").concat(+n),!0),o.withCredentials=!0,o.setRequestHeader("Accept","*/*"),o.onload=function(){var t={},n=null,a=null;try{t=o.response?JSON.parse(o.response):{}}catch(e){t={}}t.subscribe_coupon&&(n=t.subscribe_coupon.code,a=t.subscribe_coupon.description),e.setState({code:n,description:a,loaded:!0})},o.onerror=function(){e.setState({loaded:!0})},o.send()}}},{key:"render",value:function(){var e=this.state,t=e.description,o=e.code;return e.loaded?t&&o?d.default.createElement(v,null,d.default.createElement(h,{style:b.verification,"data-aid":p.default.COUPON_DESC_REND},t),d.default.createElement(v,{style:b.couponContainer},d.default.createElement(h,{style:b.coupon,"data-aid":p.default.COUPON_CODE_REND},o))):null:d.default.createElement(y,null)}}]),t}(d.default.Component);E.propTypes={olsConfigHost:f.default.string.isRequired};var _=E;t.default=_,e.exports=t.default},function(e,t,o){"use strict";var n=o(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o(30)),r=n(o(31)),i=n(o(32)),l=n(o(33)),u={local:a.default,development:r.default,test:i.default,production:l.default};t.default=u,e.exports=t.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={olsHost:"https://{websiteId}.onlinestore.dev-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.onlinestore.dev-godaddy.com",formSubmitHost:"https://gem.apps.dev-godaddy.com"},e.exports=t.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={olsHost:"https://{websiteId}.onlinestore.dev-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.onlinestore.dev-godaddy.com",formSubmitHost:"https://gem.apps.dev-godaddy.com"},e.exports=t.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={olsHost:"https://{websiteId}.onlinestore.test-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.mysimplestore.test-godaddy.com",formSubmitHost:"https://gem.apps.test-godaddy.com"},e.exports=t.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={olsHost:"https://{websiteId}.onlinestore.godaddy.com",olsPublishedSiteHost:"https://{websiteId}.mysimplestore.com",formSubmitHost:"https://gem.apps.godaddy.com"},e.exports=t.default}]);