(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=n(0),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){return t.tick()}),1e3)}},{key:"tick",value:function(){var t=this;this.setState((function(){var e=new Date;return t.props.isClockVisible||console.log(e.toLocaleTimeString()),{date:new Date}}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:["Current time:"," ",this.state.date.toLocaleTimeString()]})}}]),n}(u.a.Component),k=(n(13),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!1,number:0,clockName:""},t.active=function(){var e=t.state.isClockVisible;t.setState({isClockVisible:!e})},t.random=function(){var e=Math.round(100*Math.random()),n=t.state.number;t.setState({number:e}),t.setState({clockName:"The Clock was renamed from ".concat(n," to ").concat(e,".")}),console.log(t.state.clockName)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible,e=t?"Show":"Hide";return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsx)("button",{type:"button",onClick:this.active,children:e}),Object(b.jsx)("button",{type:"button",onClick:this.random,children:"Set random name"}),!t&&Object(b.jsx)(h,{name:this.state.clockName,isClockVisible:this.state.isClockVisible})]})}}]),n}(u.a.Component));a.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3df4d984.chunk.js.map