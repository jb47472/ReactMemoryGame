(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"Lois",image:"https://i.pinimg.com/736x/b1/1f/b7/b11fb745ff50dde97c33b3298c8e0b8d--lois-griffin-family-guy.jpg"},{id:2,name:"Meg",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9SgCG827vrGZnwFYT5__78tTFSoGUFG4mUe4QWTaqVf8jitZNwQ"},{id:3,name:"Stewie",image:"https://www.liveabout.com/thmb/HDb8oODbDYm6Qdk9Kb18-exJyG4=/653x520/filters:no_upscale():max_bytes(150000):strip_icc()/fGuy2006_Stewie1_f-56a00b003df78cafda9fc746.jpg"},{id:4,name:"Glen",image:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Glenn_Quagmire.png/220px-Glenn_Quagmire.png"},{id:5,name:"Brian",image:"https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Brian_Griffin.png/195px-Brian_Griffin.png"},{id:6,name:"Quagmire",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxRzQRk72yX7YnUa-uSaVVI051n5m_IUTmPPcEozCwfIlLLjWkw"},{id:7,name:"Bruce",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3wyh3Bihu8yVnq8yRbxurbbfKk4miY6jahtqGT2WegwBcsLDpqxyBhY"},{id:8,name:"Cleveland",image:"https://upload.wikimedia.org/wikipedia/en/e/e4/Cleveland_Brown.png"},{id:9,name:"Peter",image:"https://vignette.wikia.nocookie.net/school-daze/images/0/06/Peter-animation-037-actionmodal%404x.png/revision/latest?cb=20181218210924"},{id:10,name:"Joe",image:"https://i.pinimg.com/originals/b1/91/c2/b191c28a5cf51c0331c432ad0f1adb2a.png"},{id:11,name:"Mayor West",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwXvuScTy9fqMmvaHK_0JmyFtxUPh1y6MjC2RvjYv07hYtBUh"},{id:12,name:"Family",image:"http://ichef.bbci.co.uk/news/466/mcs/media/images/71764000/jpg/_71764522_bbc_familyguy.jpg"}]},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(6),r=a.n(c),m=(a(15),a(1)),o=a(2),s=a(4),l=a(3),d=a(5);a(16),a(17),a(18);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},p=(a(19),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"headerContainer"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("h4",{align:"left"}," Clicky Game")),i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("h4",{align:"middle"}," ",this.props.status)),i.a.createElement("div",{className:"col-sm-4"},i.a.createElement("h4",{align:"right"}," Score: ",this.props.score," | Top Score: ",this.props.topScore))))}}]),t}(n.Component)),g=(a(20),function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"bannerContainer"},i.a.createElement("h5",{align:"middle"},"Clicky Game!"),i.a.createElement("h3",{align:"middle"},"Click an image to earn points, but don't use the same image more than once!"))}}]),t}(n.Component));a(21);var h=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name))),i.a.createElement("span",{onClick:function(){return e.shuffle(e.id)},className:"shuffle"},"\ud835\ude05"))},f=a(8),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={status:"",score:0,topScore:0,characters:f},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{status:this.state.status,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(g,null),i.a.createElement(u,null,this.state.characters.map(function(e){return i.a.createElement(h,{id:e.id,key:e.id,name:e.name,image:e.image})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2921cffe.chunk.js.map