(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(187)},110:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(110),a(10)),c=a(11),s=a(13),m=a(12),u=a(14),h=a(94),d=a.n(h),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e={strings:["Cornell Quant Club","--.- ..- .- -. - .. - .- - .. ...- ."],typeSpeed:50,backSpeed:50,loop:!0,loopCount:1/0};this.typed=new d.a(this.el,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this,t=this.props.webData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap-close",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#mission"},"Mission")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Work")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#photos"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#timeline"},"Timeline")),l.a.createElement("li",{id:"testimonials_li"},l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Words")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#cooperations"},"Cooperators")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("div",{className:"wrap"},l.a.createElement("h1",{className:"type-wrap"},l.a.createElement("span",{style:{whiteSpace:"pre"},ref:function(t){e.el=t}}))),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},t.role),t.roleDescription,l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t.socialLinks&&t.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#mission"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"mission"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},e.mission&&e.mission.map(function(e){return l.a.createElement("div",{key:e.specialization,className:"row item"},l.a.createElement("div",{align:"center",className:"twelve columns"},l.a.createElement("h1",null,l.a.createElement("span",null,"Mission")),l.a.createElement("br",null),l.a.createElement("p",{className:"info"},e.specialization)))}))))}}]),t}(n.Component),f=(n.Component,n.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",{key:e.description},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))))))}}]),t}(n.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("section",{id:"contact",style:{background:"#f7f8ff"}},l.a.createElement("div",{className:"row",style:{marginLeft:"auto",marginRight:"auto"}},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("br",null),l.a.createElement("h4",null,"Contact us"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,"Addr: ",e.addr),l.a.createElement("br",null),l.a.createElement("span",null,"Email: ",e.email)),l.a.createElement("br",null),l.a.createElement("img",{src:"images/2880px-Cornell_University_logo.svg.png",alt:"",style:{height:71.5}}))))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.webData;return l.a.createElement("footer",{style:{background:"#f8fcf9"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.url},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{style:{background:"#b41a20"},className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/y-yan"},"\xa9"),"2019 Cornell Quant Club\xa0|\xa0 All right reserved.",l.a.createElement("br",null),"Cornell University, Ithaca, NY")))}}]),t}(n.Component),y={role:"Glug, glug, woohoo!",name:"Cornell Quant Club ",addr:"133 Duffield Hall, Cornell University",email:"milk@cornell.edu",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/y-yan",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/yanym/Cornell-Club",className:"fa fa-github"},{name:"ins",url:"https://www.instagram.com/vency012/",className:"fa fa-instagram"}],mission:[{specialization:"\u201cDoes this mean you\u2019re going to make l to me tonight, Christian?\u201d Holy s. Did I just say that? His mouth drops open slightly, but he recovers quickly. \u201cNo, Anastasia it doesn\u2019t. Firstly, I don\u2019t make l. I f\u2026 hard. Secondly, there\u2019s a lot more paperwork to do, and thirdly, you don\u2019t yet know what you\u2019re in for. You could still run for the hills. Come, I want to show you my playroom.\u201d My mouth drops open. F hard! Holy s, that sounds so\u2026 hot. But why are we looking at a playroom? I am mystified. \u201cYou want to play on your Xbox?\u201d I ask. He laughs, loudly. \u201cNo, Anastasia, no Xbox, no Playstation. Come.\u201d\u2026 Producing a key from his pocket, he unlocks yet another door and takes a deep breath. \u201cYou can leave anytime. The helicopter is on stand-by to take you whenever you want to go, you can stay the night and go home in the morning. It\u2019s fine whatever you decide.\u201d \u201cJust open the damn door, Christian.\u201d He opens the door and stands back to let me in. I gaze at him once more. I so want to know what\u2019s in here. Taking a deep breath I walk in. And it feels like I\u2019ve time-traveled back to the sixteenth century and the Spanish Inquisition.\u201d"}],portfolio:[{name:"Google",description:"Google is the best",content:"The night before his ninety-fifth-birthday party, my father fell while turning around. The night before his ninety-fifth-birthday party, my father fell while turning around. ",imgurl:"images/Google.jpg",url:"www.google.com"},{name:"Facebook",description:"Facebook is the second ",content:"The night good a pretty fxk his ninety-fifth-birthday party, my father fell while turning around. The night good a pretty fxk his ninety-fifth-birthday party, my father fell while turning around.",imgurl:"images/Facebook.jpg",url:"www.google.com/search?source=hp&ei=IOY0XKOaE5G6tQWrg45Y&q=google&btnK=Google+Search&oq=google&gs_l=psy-ab.3..35i39l2j0i131j0l2j0i131j0l3j0i131.348.2659..8164...0.0..2.1051.5333.2-1j2j1j2j2j1....3..0....1..gws-wiz.....6.Wu_VOGN16UM"},{name:"Chrome",description:"Google is the best",content:"It\u2019s fine whatever you decide.\u201d \u201cJust open the damn door, Christian.\u201d He opens the door and stands back to let me in. I gaze at him once more. I so want to know what\u2019s in here. Taking a deep breath I walk in. And it feels like I\u2019ve time-traveled back to the sixteenth century and the Spanish Inquisition.",imgurl:"images/Chrome.jpg",url:"www.google.com/search?ei=K-Y0XKeuIpLcswWO5piYBA&q=cornell&oq=cornell&gs_l=psy-ab.3..35i39l2j0j0i131j0l6.11648.12286..12921...0.0..0.154.1013.0j7....2..0....1..gws-wiz.......0i71j0i67j0i131i67.H0nh7uTsiGA"},{name:"Ins",description:"Ins!",content:"Nonthing need to say",imgurl:"images/Ins.jpg",url:"www.thestreet.com/politics/donald-trump-idiot-google-images-why-14808650"}],PastPortfolio:[{name:"Project1",description:"past is past",content:"The night after his ninety-fifth-birthday party, my father fell while turning around. ",imgurl:"images/profilepic1.jpg",url:"www.google.com"},{name:"Project2",description:"mobileap2p",content:"We gonna change the world.",imgurl:"images/profilepic2.jpg",url:"www.google.com"}],testimonials:[{description:"God's Plan",name:"Drake"},{description:"This is the best Web.",name:"Yiming"},{description:"Exactly",name:"Yan"}]},w=a(191),v=a(122),j=a(133),k=w.a.Meta,N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"photos",style:{background:"white"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Team"),l.a.createElement(v.a,null,l.a.createElement(j.a,{sm:4,md:4,lg:4}),l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo1.jpg"})},l.a.createElement(k,{style:{fontSize:"15px"},title:"Cornell",description:"Engineering phddddd testing the length"}))),l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},"                  ",l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.jpg"})},l.a.createElement(k,{style:{fontSize:"15px"},title:"Upenn",description:"CIS"})))),l.a.createElement(v.a,null,l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.jpg"})},l.a.createElement(k,{style:{fontSize:"15px"},title:"UMich",description:"Good"}))),l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo3.jpg"})},l.a.createElement(k,{style:{fontSize:"15px"},title:"MIT",description:"Best"}))),l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.jpg"})},l.a.createElement(k,{style:{fontSize:"15px"},title:"Caltech",description:"Second"})))))),l.a.createElement("hr",null))}}]),t}(n.Component),O=w.a.Meta,x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"photos",style:{background:"white"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Advisor"),l.a.createElement(v.a,null,l.a.createElement(j.a,{sm:4,md:4,lg:4}),l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.jpg"})},l.a.createElement(O,{style:{fontSize:"15px"},title:"Cornell",description:"Engineering"}))),l.a.createElement(j.a,{xs:12,sm:8,md:8,lg:8},l.a.createElement(w.a,{hoverable:!1,style:{width:"40%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo1.jpg"})},l.a.createElement(O,{style:{fontSize:"15px"},title:"Cornell Tech",description:"Medical"})))))))}}]),t}(n.Component),C=a(190),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.webData,t=[],a=0;a<e.portfolio.length;a++)t.push({href:"".concat(e.portfolio[a].url),title:"".concat(e.portfolio[a].name),description:"".concat(e.portfolio[a].description),content:"".concat(e.portfolio[a].content),imgurl:"".concat(e.portfolio[a].imgurl)});return l.a.createElement("section",{id:"portfolio",style:{background:"#f7f8ff"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Current Work"),l.a.createElement(C.a,{itemLayout:"vertical",size:"default",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:t,renderItem:function(e){return l.a.createElement(C.a.Item,{key:e.title,extra:l.a.createElement("img",{width:144,alt:"logo",src:e.imgurl}),style:{textAlign:"justify"}},l.a.createElement(C.a.Item.Meta,{title:l.a.createElement("a",{href:e.href},e.title),description:e.description}),e.content)}}))))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.webData,t=[],a=0;a<e.PastPortfolio.length;a++)t.push({href:"".concat(e.PastPortfolio[a].url),title:"".concat(e.PastPortfolio[a].name),description:"".concat(e.PastPortfolio[a].description),content:"".concat(e.PastPortfolio[a].content),imgurl:"".concat(e.PastPortfolio[a].imgurl)});return l.a.createElement("section",{id:"portfolio",style:{background:"#f6fdf7"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Past Work"),l.a.createElement(C.a,{itemLayout:"vertical",size:"default",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:t,renderItem:function(e){return l.a.createElement(C.a.Item,{key:e.title,extra:l.a.createElement("img",{width:144,alt:"logo",src:e.imgurl}),style:{textAlign:"justify"}},l.a.createElement(C.a.Item.Meta,{title:l.a.createElement("a",{href:e.href},e.title),description:e.description}),e.content)}}))))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"cooperations",style:{background:"white"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h1",null,"Cooperator"),l.a.createElement(v.a,null,l.a.createElement(j.a,{xs:6,sm:6,md:6,lg:4},l.a.createElement(w.a,{hoverable:!1,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo2.jpg"})})),l.a.createElement(j.a,{xs:6,sm:6,md:6,lg:4},l.a.createElement(w.a,{hoverable:!1,style:{width:"50%",marginLeft:"auto",marginRight:"auto",textAlign:"center"},bordered:!1,cover:l.a.createElement("img",{alt:"example",src:"images/photo1.jpg"})}))))))}}]),t}(n.Component),A=a(192),D=a(42),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"timeline"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Timeline"),l.a.createElement(A.a,{mode:"alternate"},l.a.createElement(A.a.Item,{style:{fontSize:"15px"}},"Create a services site 2019-01-01"),l.a.createElement(A.a.Item,{color:"green",style:{fontSize:"15px"}},"Solve initial network problems 2018-09-01"),l.a.createElement(A.a.Item,{style:{fontSize:"15px"},dot:l.a.createElement(D.a,{type:"clock-circle-o",style:{fontSize:"15px"}})},"Buy a cow."),l.a.createElement(A.a.Item,{color:"red",style:{fontSize:"15px"}},"Network problems being solved 2017-09-01"),l.a.createElement(A.a.Item,{style:{fontSize:"15px"}},"Create a services site 2016-09-01"),l.a.createElement(A.a.Item,{style:{fontSize:"15px"},dot:l.a.createElement(D.a,{type:"clock-circle-o",style:{fontSize:"15px"}})},"Tech 2015-09-01")))))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{webData:y}),l.a.createElement(g,{webData:y}),l.a.createElement(I,{webData:y}),l.a.createElement(S,{webData:y}),l.a.createElement(N,null),l.a.createElement(x,null),l.a.createElement(P,null),l.a.createElement(z,null),l.a.createElement(f,{webData:y}),l.a.createElement(E,{webData:y}),l.a.createElement(b,{webData:y}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(185);o.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,2,1]]]);
//# sourceMappingURL=main.867e6962.chunk.js.map