(this["webpackJsonpwallpaper-generator"]=this["webpackJsonpwallpaper-generator"]||[]).push([[0],{14:function(e,n,o){},15:function(e,n,o){},27:function(e,n,o){"use strict";o.r(n);var t=o(0),i=o.n(t),r=o(5),d=o.n(r),a=(o(14),o(2)),s=o(3),u=o(9),c=o(8),h=(o(15),o(6)),l=o.n(h),w=function(){function e(n,o,t,i,r){Object(a.a)(this,e),this.Fill=void 0,this.RidgeXStart=void 0,this.RidgeYStart=void 0,this.Smoodness=void 0,this.Amplitude=void 0,this.NoiceStart=void 0,this.Fill=n,this.RidgeXStart=0,this.RidgeYStart=o,this.Smoodness=t,this.Amplitude=i,this.NoiceStart=r}return Object(s.a)(e,[{key:"DrawRidge",value:function(e){e.beginShape(),e.noStroke(),e.fill(this.Fill),e.vertex(0,e.windowHeight),e.noiseDetail(this.Smoodness,.7);var n=this.NoiceStart,o=this.RidgeYStart-e.noise(n)*this.Amplitude;e.vertex(0,o);for(var t=0;t<=e.windowWidth;t+=4)e.vertex(t,o),n+=.03,o=this.RidgeYStart-e.noise(n)*this.Amplitude;e.vertex(e.windowWidth,o),e.vertex(e.windowWidth,e.windowHeight),e.endShape(e.CLOSE)}}]),e}(),g=o(7),S=o(1),p=function(){var e,n={Seed:0,Amplitude:100,Smoodness:4,NumberOfRidges:4,SpaceBetweenRidges:100,BackRidgeColor:"#6a6a6e",FrontRidgeColor:"#000064",MoonXPosition:0,MoonYPosition:0,MoonSize:300};return Object(S.jsx)(l.a,{setup:function(o,t){o.createCanvas(o.windowWidth,o.windowHeight).parent(t).id("canvas"),n.Seed=o.random(-99999,99999),n.MoonXPosition=o.windowWidth/10*o.random(2,8),n.MoonYPosition=o.windowHeight-n.SpaceBetweenRidges*n.NumberOfRidges-o.noise(0)*n.Amplitude*1.5;var i=new g.a;i.useLocalStorage=!0,i.add(n,"Seed",-99999,99999,5).onChange((function(){return o.redraw()}));var r=i.addFolder("Mountains");r.open(),r.add(n,"Amplitude",0,300,5).onChange((function(){return o.redraw()})),r.add(n,"Smoodness",1,12,1).onChange((function(){return o.redraw()})),r.add(n,"NumberOfRidges",1,10,1).name("Number of Ridges").onChange((function(){return o.redraw()})),r.add(n,"SpaceBetweenRidges",50,200,5).name("Space").onChange((function(){return o.redraw()})),r.addColor(n,"BackRidgeColor").name("Back Color").onChange((function(){return o.redraw()})),r.addColor(n,"FrontRidgeColor").name("Front Color").onChange((function(){return o.redraw()}));var d=i.addFolder("Moon");d.open(),d.add(n,"MoonXPosition",0,o.windowWidth,1).name("X Pos").onChange((function(){return o.redraw()})),d.add(n,"MoonYPosition",0,o.windowHeight,1).name("Y Pos").onChange((function(){return o.redraw()})),d.add(n,"MoonSize",0,1e3,1).name("Size").onChange((function(){return o.redraw()})),o.noLoop(),e=document.getElementById("canvas")},draw:function(o){o.noiseSeed(n.Seed);var t=o.color(n.BackRidgeColor),i=o.color(n.FrontRidgeColor),r=1/n.NumberOfRidges,d=0;o.background(51),o.fill(230);var a=e.getContext("2d");a.shadowBlur=50,a.shadowColor="white",o.noStroke(),o.ellipse(n.MoonXPosition,n.MoonYPosition,n.MoonSize),a.shadowBlur=0;for(var s=n.NumberOfRidges;s>=1;s--){var u=o.lerpColor(t,i,d),c=o.height-n.SpaceBetweenRidges*s-.3*n.Amplitude;new w(u,c,n.Smoodness,n.Amplitude,n.Seed*s).DrawRidge(o),d+=r}},windowResized:function(e){e.resizeCanvas(e.windowWidth,e.windowHeight)}})},f=function(e){Object(u.a)(o,e);var n=Object(c.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(p,{})})}}]),o}(i.a.Component),m=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,28)).then((function(n){var o=n.getCLS,t=n.getFID,i=n.getFCP,r=n.getLCP,d=n.getTTFB;o(e),t(e),i(e),r(e),d(e)}))};d.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(f,{})}),document.getElementById("root")),m()}},[[27,1,2]]]);
//# sourceMappingURL=main.6939c258.chunk.js.map