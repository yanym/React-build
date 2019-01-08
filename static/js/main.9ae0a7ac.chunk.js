(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),i=a.n(r),c=(a(90),a(8)),o=a(9),s=a(12),m=a(10),u=a(13),p=a(75),h=a.n(p),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e={strings:["Cornell Creepy Club","Creepy "," \ud83d\ude03Creepy\ud83d\ude09"],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new h.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=this.props.webData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#mission"},"Mission")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Work")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#photos"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#timeline"},"Timeline")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Words")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("div",{className:"wrap"},l.a.createElement("h1",{className:"type-wrap"},l.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},t.role),t.roleDescription,l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t.socialLinks&&t.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#mission"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"mission"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},e.mission&&e.mission.map(function(e){return l.a.createElement("div",{key:e.specialization,className:"row item"},l.a.createElement("div",{align:"center",className:"twelve columns"},l.a.createElement("h1",null,l.a.createElement("span",null,"Mission")),l.a.createElement("br",null),l.a.createElement("p",{className:"info"},e.specialization)))}))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"portfolio",style:{background:"#f7f8ff"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Current Work"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item",key:e.imgurl},l.a.createElement("div",{className:"item-wrap",style:{background:"#d4ffcc"}},l.a.createElement("a",{href:"https://"+e.url},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:""}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"portfolio",style:{background:"#f6fdf7"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Past Work"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.PastPortfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item",key:e.imgurl},l.a.createElement("div",{className:"item-wrap",style:{background:"#c2e9fe"}},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:""}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",{key:e.description},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))))))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"contact",style:{background:"#f7f8ff"}},l.a.createElement("div",{className:"row",style:{marginLeft:"auto",marginRight:"auto"}},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("br",null),l.a.createElement("h1",null),l.a.createElement("h4",null,"Contact us"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,"Addr: ",e.addr),l.a.createElement("br",null),l.a.createElement("span",null,"Email: ",e.email)))))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("footer",{style:{background:"#f8fcf9"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.url},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),y={role:"Write Some detail",name:"Cornell Club",addr:"Ithaca, NY",email:"sb@cornell.edu",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/y-yan",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/yanym/Cornell-Club",className:"fa fa-github"},{name:"twitter",url:"https://www.instagram.com/vency012/",className:"fa fa-instagram"}],mission:[{specialization:"The night before his ninety-fifth-birthday party, my father fell while turning around in his kitchen. My sister Lisa and her husband, Bob, dropped by hours later to hook up his new TV and discovered him on the floor, disoriented and in pain. He fell again after they righted him, so an ambulance was called. At the hospital, they met up with our sister Gretchen, and with Amy, who\u2019d just flown in from New York to attend the party, which was now cancelled. \u201cIt was really weird,\u201d she said when we spoke on the phone the following morning. \u201cDad thought Lisa was Mom, and when the doctor asked him where he was he answered, \u2018Syracuse\u2019\u2014where he went to college. Then he got mad and said, \u2018You\u2019re sure asking a lot of questions.\u2019 As if that\u2019s not normal for a doctor. I think he thought this was just some guy he was talking to.\u201d"}],portfolio:[{name:"project1",description:"The night before his ninety-fifth-birthday party, my father fell while turning around. ",imgurl:"images/profilepic1.jpg",url:"www.google.com"},{name:"project2",description:"The night good a pretty fxk his ninety-fifth-birthday party, my father fell while turning around. ",imgurl:"images/profilepic2.jpg",url:"www.google.com/search?source=hp&ei=IOY0XKOaE5G6tQWrg45Y&q=google&btnK=Google+Search&oq=google&gs_l=psy-ab.3..35i39l2j0i131j0l2j0i131j0l3j0i131.348.2659..8164...0.0..2.1051.5333.2-1j2j1j2j2j1....3..0....1..gws-wiz.....6.Wu_VOGN16UM"},{name:"project3",description:"mobileapp3",imgurl:"images/profilepic3.jpg",url:"www.google.com/search?ei=K-Y0XKeuIpLcswWO5piYBA&q=cornell&oq=cornell&gs_l=psy-ab.3..35i39l2j0j0i131j0l6.11648.12286..12921...0.0..0.154.1013.0j7....2..0....1..gws-wiz.......0i71j0i67j0i131i67.H0nh7uTsiGA"},{name:"project4",description:"mobileapp4",imgurl:"images/profilepic4.jpg",url:"www.thestreet.com/politics/donald-trump-idiot-google-images-why-14808650"}],PastPortfolio:[{name:"project1",description:"The night after his ninety-fifth-birthday party, my father fell while turning around. ",imgurl:"images/profilepic1.jpg",url:"www.google.com"},{name:"project2",description:"mobileap2p",imgurl:"images/profilepic2.jpg",url:"www.google.com"}],testimonials:[{description:"I am Creepy Hang",name:"Dong"},{description:"I am Creepy lyd",name:"Hang"},{description:"This is the best react.",name:"Yiming"},{description:"I think so.",name:"Yan"}]},j=a(159),N=a(157),k=a(158),O=j.a.Meta,C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"photos",style:{background:"white"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Team"),l.a.createElement(N.a,null,l.a.createElement(k.a,{sm:0,lg:4}),l.a.createElement(k.a,{xs:24,md:12,lg:8},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(O,{title:"Cornell",description:"Creepy phd"}))),l.a.createElement(k.a,{xs:24,md:12,lg:8},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(O,{title:"danainiu",description:"222"})))),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement(N.a,null,l.a.createElement(k.a,{xs:24,md:12,lg:8},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(O,{title:"laomuzhu",description:"333"}))),l.a.createElement(k.a,{xs:24,md:12,lg:8},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(O,{title:"xiaoniunai",description:"444"}))),l.a.createElement(k.a,{xs:24,md:12,lg:8},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(O,{title:"daniunai",description:"555"})))))))}}]),t}(n.Component),x=j.a.Meta,D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"photos",style:{background:"white"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Advisor"),l.a.createElement(N.a,null,l.a.createElement(k.a,{xs:24,md:12,lg:12},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(x,{title:"Cornell",description:"Creepy phd"}))),l.a.createElement(k.a,{xs:24,md:12,lg:12},l.a.createElement(j.a,{hoverable:!1,style:{width:"60%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.png"})},l.a.createElement(x,{title:"danainiu",description:"222"})))))))}}]),t}(n.Component),L=a(160),A=a(39),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"timeline"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Timeline"),l.a.createElement(L.a,{mode:"alternate"},l.a.createElement(L.a.Item,null,"Create a services site 2019-01-01"),l.a.createElement(L.a.Item,{color:"green"},"Solve initial network problems 2018-09-01"),l.a.createElement(L.a.Item,{dot:l.a.createElement(A.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Buy a cow."),l.a.createElement(L.a.Item,{color:"red"},"Network problems being solved 2017-09-01"),l.a.createElement(L.a.Item,null,"Create a services site 2016-09-01"),l.a.createElement(L.a.Item,{dot:l.a.createElement(A.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Tech 2015-09-01")))))}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{webData:y}),l.a.createElement(E,{webData:y}),l.a.createElement(g,{webData:y}),l.a.createElement(f,{webData:y}),l.a.createElement(C,null),l.a.createElement(D,null),l.a.createElement(I,null),l.a.createElement(b,{webData:y}),l.a.createElement(w,{webData:y}),l.a.createElement(v,{webData:y}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(154);i.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,a){e.exports=a(156)},90:function(e,t,a){}},[[85,2,1]]]);
//# sourceMappingURL=main.9ae0a7ac.chunk.js.map