System.register("chunks:///_virtual/backGround.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,a,r,p,s,o,d,h,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){r=e.cclegacy,p=e._decorator,s=e.Node,o=e.Prefab,d=e.instantiate,h=e.Vec3,l=e.randomRangeInt,c=e.Component}],execute:function(){var u,f,P,b,y,g,v;r._RF.push({},"cb9564A3lJI7os2CLJFsFgP","backGround",void 0);var m=p.ccclass,C=p.property;e("backGround",(u=m("backGround"),f=C({type:s}),P=C({type:o}),u((g=t((y=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),p=0;p<i;p++)r[p]=arguments[p];return t=e.call.apply(e,[this].concat(r))||this,n(t,"parentBackGround",g,a(t)),n(t,"pipePrefab",v,a(t)),t.pipa=[],t.speed=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=d(this.pipePrefab);this.node.parent.getChildByName("pipe").addChild(e),e.setParent(this.node.parent),e.setPosition(new h(200,0,0)),this.pipa.push(e),e=d(this.pipePrefab),this.node.parent.getChildByName("pipe").addChild(e),e.setParent(this.node.parent),e.setPosition(new h(344,0,0)),this.pipa.push(e),e=d(this.pipePrefab),this.node.parent.getChildByName("pipe").addChild(e),e.setParent(this.node.parent),e.setPosition(new h(865,0,0)),this.pipa.push(e)},r.update=function(e){var t=this.node.getPosition();t.x-=57.6*e+this.speed,t.x<=-288&&(t.x+=288,this.speed+=.5),this.node.setPosition(t);for(var i=0;i<this.pipa.length;i++){var n=this.pipa[i].getPosition();n.x-=50*e+this.speed,n.x<=-200&&(n.x+=400,n.y=l(-120,170),this.speed+=.5),this.pipa[i].setPosition(n)}},t}(c)).prototype,"parentBackGround",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=t(y.prototype,"pipePrefab",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=y))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./birdAudio.ts","./result.ts"],(function(i){var t,e,n,o,r,s,u,c,a,d,p,l,h;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,n=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){r=i.cclegacy,s=i._decorator,u=i.Animation,c=i.Vec3,a=i.input,d=i.Input,p=i.Component},function(i){l=i.birdAudio},function(i){h=i.result}],execute:function(){var b,f,y,v,T,A,m;r._RF.push({},"d97fbnrTXdFi4SxjHEEAsya","bird",void 0);var R=s.ccclass,g=s.property;i("bird",(b=R("bird"),f=g({type:l}),y=g({type:h}),b((A=t((T=function(i){function t(){for(var t,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return t=i.call.apply(i,[this].concat(r))||this,n(t,"clip",A,o(t)),n(t,"Result",m,o(t)),t.birdAnimation=void 0,t.birdLocation=void 0,t.speedTurun=100,t}e(t,i);var r=t.prototype;return r.onLoad=function(){this.resetBird(),this.birdAnimation=this.getComponent(u)},r.resetBird=function(){this.birdLocation=new c(0,0,0),this.node.setPosition(this.birdLocation)},r.start=function(){a.on(d.EventType.TOUCH_START,this.onInputReceived,this),this.clip.onAudioQueue(0)},r.onInputReceived=function(i){this.speedTurun=100,this.clip.onAudioQueue(0),this.Result.addScore()},r.update=function(i){var t=this.node.getPosition();t.y+=this.speedTurun*i+2,this.speedTurun-=100*i,this.node.setPosition(t);var e=this.speedTurun;e>=30?e=30:e<=-30&&(e=-30),this.node.setRotationFromEuler(0,0,e)},t}(p)).prototype,"clip",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=t(T.prototype,"Result",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=T))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/birdAudio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,r,o,t,n,u,c,a,l;return{setters:[function(i){e=i.applyDecoratedDescriptor,r=i.inheritsLoose,o=i.initializerDefineProperty,t=i.assertThisInitialized},function(i){n=i.cclegacy,u=i._decorator,c=i.AudioClip,a=i.AudioSource,l=i.Component}],execute:function(){var p,s,d,f,y,b,h;n._RF.push({},"8323dbiIsZOForf91Lj4X9J","birdAudio",void 0);var A=u.ccclass,v=u.property;i("birdAudio",(p=A("birdAudio"),s=v({type:[c]}),d=v({type:a}),p((b=e((y=function(i){function e(){for(var e,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return e=i.call.apply(i,[this].concat(n))||this,o(e,"clips",b,t(e)),o(e,"audioSource",h,t(e)),e}return r(e,i),e.prototype.onAudioQueue=function(i){var e=this.clips[i];this.audioSource.playOneShot(e)},e}(l)).prototype,"clips",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=e(y.prototype,"audioSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=y))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/gameControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./bird.ts","./result.ts"],(function(e){var t,i,r,n,s,o,a,u,l,c,p,h,d,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){s=e.cclegacy,o=e._decorator,a=e.director,u=e.input,l=e.Input,c=e.Node,p=e.KeyCode,h=e.Component},function(e){d=e.bird},function(e){f=e.result}],execute:function(){var v,y,m,R,g,b,C;s._RF.push({},"bc5aeYtSqRETJNEkvKi/htV","gameControl",void 0);var O=o.ccclass,w=o.property;e("gameControl",(v=O("gameControl"),y=w({type:d}),m=w({type:f}),v((b=t((g=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s))||this,r(t,"Bird",b,n(t)),r(t,"Result",C,n(t)),t.isOver=void 0,t}i(t,e);var s=t.prototype;return s.onLoad=function(){this.initListener(),this.Result.resetScore(),this.isOver=!0,a.pause()},s.initListener=function(){var e=this;u.on(l.EventType.KEY_DOWN,this.onKeyDown,this),this.node.on(c.EventType.TOUCH_START,(function(){1==e.isOver?(e.resetGame(),e.Bird.resetBird(),e.startGame()):(e.Bird.start(),a.resume())}))},s.onKeyDown=function(e){switch(e.keyCode){case p.KEY_P:a.pause()}},s.startGame=function(){this.Result.hideResult(),a.resume()},s.gameOver=function(){this.Result.showResult(),this.isOver=!0,a.pause()},s.resetGame=function(){this.Result.resetScore(),this.isOver=!1,this.startGame()},t}(h)).prototype,"Bird",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(g.prototype,"Result",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=g))||R));s._RF.pop()}}}));

System.register("chunks:///_virtual/ground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o,i,s,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,a=e.Node,u=e.Component}],execute:function(){var c,p,l,d,f;i._RF.push({},"1d867H1dDlMw5yznZ1PlJm7","ground",void 0);var h=s.ccclass,y=s.property;e("ground",(c=h("ground"),p=y({type:a}),c((f=t((d=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,n(t,"parentGround",f,o(t)),t.speed=0,t}r(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){var t=this.node.getPosition();t.x-=57.6*e+this.speed,t.x<=-288&&(t.x+=288,this.speed+=.5),this.node.setPosition(t)},t}(u)).prototype,"parentGround",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=d))||l));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./backGround.ts","./bird.ts","./birdAudio.ts","./gameControl.ts","./ground.ts","./pipeCollider.ts","./result.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/pipeCollider.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,i,r,c;return{setters:[function(e){t=e.inheritsLoose},function(e){o=e.cclegacy,n=e._decorator,i=e.Collider2D,r=e.Contact2DType,c=e.Component}],execute:function(){var l;o._RF.push({},"cc7c1f0jaNNV7IsdWXsJvHN","pipeCollider",void 0);var p=n.ccclass;n.property,e("pipeCollider",p("pipeCollider")(l=function(e){function o(){return e.apply(this,arguments)||this}t(o,e);var n=o.prototype;return n.start=function(){this.node.getComponent(i).on(r.BEGIN_CONTACT,this.onCollide,this)},n.onCollide=function(){alert("Game Over")},n.update=function(e){},o}(c))||l);o._RF.pop()}}}));

System.register("chunks:///_virtual/result.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,o,n,c,s,a;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,c=e._decorator,s=e.Label,a=e.Component}],execute:function(){var l,u,h,p,d,S,f,b,g;n._RF.push({},"b105dxCUldCEZs7GQU+KPyv","result",void 0);var y=c.ccclass,v=c.property;e("result",(l=y("result"),u=v({type:s}),h=v({type:s}),p=v({type:s}),l((f=t((S=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return t=e.call.apply(e,[this].concat(n))||this,i(t,"scoreLabel",f,o(t)),i(t,"highScore",b,o(t)),i(t,"resultEnd",g,o(t)),t.maxScore=0,t.currentScore=void 0,t}r(t,e);var n=t.prototype;return n.updateScore=function(e){this.currentScore=e,this.scoreLabel.string=""+this.currentScore},n.resetScore=function(){this.updateScore(0),this.hideResult()},n.addScore=function(){this.updateScore(this.currentScore+1)},n.showResult=function(){this.maxScore=Math.max(this.maxScore,this.currentScore),this.highScore.string="Hihg Score: "+this.maxScore,this.resultEnd.node.active=!0,this.highScore.node.active=!0},n.hideResult=function(){this.highScore.node.active=!1,this.resultEnd.node.active=!1},t}(a)).prototype,"scoreLabel",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(S.prototype,"highScore",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(S.prototype,"resultEnd",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=S))||d));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});