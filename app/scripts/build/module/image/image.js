define(function(require,exports,module){function Picture(){}var $=require("zepto");module.exports=Picture,Picture.prototype._operate=function(){return{filter:function(obj){var checked=getSelectedStatus(obj),role=$(obj).attr("role");"grayscale"==role?applyFilter(0,checked&&new f.Grayscale):"invert"==role?applyFilter(0,checked&&new f.Invert):"blur"==role?applyFilter(0,checked&&new f.Convolute({matrix:[1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9,1/9]})):"convolute"==role?applyFilter(0,checked&&new f.Convolute({matrix:[1,1,1,1,.7,-1,-1,-1,-1]})):"sepia"==role?applyFilter(0,checked&&new f.Sepia):"sepia2"==role?applyFilter(0,checked&&new f.Sepia2):"brightness"==role?applyFilter(0,checked&&new f.Brightness({brightness:parseInt(60,10)})):"blend"==role?applyFilter(0,checked&&new f.Blend({color:"#17729e","mix-blend-mode":"difference"})):"none"==role&&applyFilter(0,!1)}}}(),Picture.prototype.drawImage=function(obj){var path=obj.attr("src");fabric.Image.fromURL(path,function(img){var percent=.9*canvas.width/img.width,top=Number(canvas.height/2-img.height*percent/2),left=Number(canvas.width/2-img.width*percent/2);percent>=1&&(percent=1),img.scale(percent).set({angle:0,left:left,top:top,hasBorders:!1}),img.setControlsVisibility({bl:!1,br:!1,tl:!1,tr:!1,mt:!1,mb:!1,ml:!1,mr:!1,mtr:!1}),canvas.add(img).setActiveObject(img)})},Picture.prototype.loadSVGImage=function(obj){var url=obj.attr("data-svg");fabric.loadSVGFromURL(url,function(objects,options){var obj=fabric.util.groupSVGElements(objects,options),percent=Number(canvas.width/obj.width).toFixed(2)-.05,top=Number(canvas.height/2-obj.height*percent/2),left=Number(canvas.width/2-obj.width*percent/2);obj.scale(percent),obj.set({left:left,top:top,globalCompositeOperation:"source-atop"}),canvas.add(obj)})},Picture.prototype.loadPhotoFrame=function(obj){var url=obj.attr("src");canvas.setOverlayImage(url,function(img){canvas.overlayImage.width=canvas.width,canvas.overlayImage.height=canvas.height,canvas.overlayImage.top=-1,canvas.renderAll()})};var applyFilter=function(index,filter){var obj=canvas.getActiveObject();void 0!=obj&&(obj.filters[index]=filter,obj.applyFilters(canvas.renderAll.bind(canvas)))},getSelectedStatus=function(o){var checked=!0;$(o).attr("role"),canvas.getActiveObject();return checked}});