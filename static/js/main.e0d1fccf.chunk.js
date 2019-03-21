(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),l=(n(15),n(1)),c=n(2),s=n(5),u=n(3),m=n(4),d=n(6),h=(n(16),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"aboutMe"},o.a.createElement("div",null,o.a.createElement("h1",{style:{paddingTop:this.props.height+9}},"About me"),o.a.createElement("p",null,"My name is Ibrahim Hassan and I am a software development enthusiast. A graduate of Seneca College's Computer Programming diploma program and a current student at Ryerson University's Computer Science Program, I seek to learn, apply, and most of all, teach.")),o.a.createElement("div",{id:"contactMe"},o.a.createElement("h3",{style:{paddingTop:this.props.height+9}},"Contact Me"),o.a.createElement("p",null,"Email: 1ibrahimhassan1@gmail.com",o.a.createElement("br",null),"Phone: (437)-220-8592")))}}]),t}(a.Component)),b=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"offerings"},o.a.createElement("h1",{style:{paddingTop:this.props.height+9}},"Subjects & Prices"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Subject"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Programming Basics"),o.a.createElement("td",null,"Every programming language has common features. The idea behind this offering is to solidify our grasp with them. (Recommended for beginners)")),o.a.createElement("tr",null,o.a.createElement("td",null,"Object Oriented Principles"),o.a.createElement("td",null,"This is the core programming methodology behind many widely used powerhouse languages such as C++ and Java. This offering is designed to introduce and expose its core for further understanding.")),o.a.createElement("tr",null,o.a.createElement("td",null,"JavaScript Core"),o.a.createElement("td",null,"Powering many modern applications and websites, like Netflix and Facebook, Javascript is a must have for anyone seeking to work with the web. This offering will cover pure Javascript only (no frameworks).")),o.a.createElement("tr",null,o.a.createElement("td",null,"JavaScript Frameworks"),o.a.createElement("td",null,"At the student's discretion. We can cover any JS framework from the popular MERN stack.")))))}}]),t}(a.Component)),p=(n(18),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"bookMe"},o.a.createElement("h1",{style:{paddingTop:this.props.height+9}},"Book Me"),o.a.createElement("p",null,"Under construction"))}}]),t}(a.Component)),g=(n(19),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={navbarHeight:0},e.navbarEdit=e.navbarEdit.bind(Object(d.a)(Object(d.a)(e))),e.isMobileDevice=e.isMobileDevice.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.isMobileDevice()?this.setState({navbarHeight:document.getElementsByClassName("navbar navbar-expand-sm navbar-dark bg-dark")[0].offsetHeight}):(window.addEventListener("scroll",this.navbarEdit),this.setState({navbarHeight:document.getElementsByClassName("globalNavbar")[0].offsetHeight}))}},{key:"navbarEdit",value:function(e){var t=window.outerHeight/100,n=document.getElementsByClassName("globalNavbar")[0],a=n.offsetWidth;window.pageYOffset>=5*t?n.setAttribute("style","position: fixed; \n            width: ".concat(a,"px; \n            border: solid 1px;\n            border-bottom-right-radius: 10px;\n            border-bottom-left-radius: 10px;\n            border-top: 0px;\n            border-right: 0px;\n            border-left: 0px; \n            margin-top: 0;\n            background-color: white;\n            ")):n.style="position: static;"}},{key:"isMobileDevice",value:function(){return"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},{key:"render",value:function(){var e=window.outerHeight/100*10;return this.isMobileDevice()?o.a.createElement("div",null,o.a.createElement("h1",null,"Mobile Site still under construction!")):o.a.createElement("div",null,o.a.createElement("nav",{className:"globalNavbar"},o.a.createElement("div",{className:"links"},o.a.createElement("a",{onClick:function(){window.scrollBy(0,e),setTimeout(function(){document.getElementById("offerings").scrollIntoView({block:"start",behavior:"smooth"})},100)}},"Subjects & Prices"),o.a.createElement("a",{onClick:function(){window.scrollBy(0,e),setTimeout(function(){document.getElementById("bookMe").scrollIntoView({block:"start",behavior:"smooth"})},100)}},"Book a Time"),o.a.createElement("a",{onClick:function(){window.scrollBy(0,e),setTimeout(function(){document.getElementById("aboutMe").scrollIntoView({block:"start",behavior:"smooth"})},100)}},"About me"),o.a.createElement("a",{onClick:function(){window.scrollTo(0,0);var e=document.getElementById("title"),t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)},className:"name"},"Tech Tutor"))),o.a.createElement("div",{className:"homPage"},o.a.createElement("span",{id:"title"},"Ibrahim Hassan")),o.a.createElement(b,{height:this.state.navbarHeight}),o.a.createElement(p,{height:this.state.navbarHeight}),o.a.createElement(h,{height:this.state.navbarHeight}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20);i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.e0d1fccf.chunk.js.map