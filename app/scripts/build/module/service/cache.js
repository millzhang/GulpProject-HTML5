/**
 * ���ݴ洢ģ��
 */
define(function(require,exports,module){function Cache(){}var $=require("zepto"),Data=require("../service/data");module.exports=Cache,Cache.prototype={container:$(".m-content"),_initData:function(){var cacheVersion=sessionStorage.version;console.log("version:"+window.version),void 0==cacheVersion?(sessionStorage.clear(),sessionStorage.version=window.version):cacheVersion!=window.version&&(sessionStorage.clear(),sessionStorage.version=window.version),this._loadFont(),this._loadDecoration(),this._loadFilter()},_loadFont:function(){if(void 0==sessionStorage.font){for(var data=Data.fonts,str="",i=0,len=data.length;len>i;i++){var item=data[i];str+="<img data-original='"+item+"' class='m-image m-source m-decoration' type='photo'>"}sessionStorage.font=str}},_loadDecoration:function(){if(void 0==sessionStorage.decoration){for(var data=Data.decoration,img="",i=0,len=data.length;len>i;i++){var item=data[i];img+="<img data-original='"+item+"' class='m-image m-source m-decoration' type='photo'>"}sessionStorage.decoration=img}},_loadCartoonGroup:function(){if(void 0==sessionStorage.ctgroup){for(var data=Data.cartoonGroup,img="",i=0,len=data.length;len>i;i++){var item=data[i];img+="<img data-original='"+item+"' class='m-image m-source' type='photo'>"}sessionStorage.ctgroup=img}},_loadCartoonChange:function(){if(void 0==sessionStorage.ctchange){for(var data=Data.cartoonChange,img="",i=0,len=data.length;len>i;i++){var item=data[i];img+="<img data-original='"+item+"' class='m-image m-source' type='frame'>"}sessionStorage.ctchange=img}},_loadFilter:function(){if(void 0==sessionStorage.filter){for(var data=Data.filter,img="",i=0,len=data.length;len>i;i++){var item=data[i];img+="<img data-original='"+item.url+"' class='m-image m-source' role='"+item.name+"' type='filter'>"}sessionStorage.filter=img}},_loadPhotoFrame:function(){if(void 0==sessionStorage.frame){for(var data=Data.photoFrame,img="",i=0,len=data.length;len>i;i++){var item=data[i];img+="<img data-original='"+item+"' class='m-image m-source' type='frame'>"}sessionStorage.frame=img}}}});