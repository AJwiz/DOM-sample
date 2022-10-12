var fn= clabels("label","for","firstName","Firstname");
var b1= linebr("br");
var ifn=cinputs("input","type","text","id","firstName");
var b2= linebr("br");

var mn= clabels("label","for","middleName","Middlename");
var b3= linebr("br");
var imn=cinputs("input","type","text","id","middleName");
var b4= linebr("br");

var ln= clabels("label","for","lastName","Lastname");
var b5= linebr("br");
var iln=cinputs("input","type","text","id","lastName");
var b6= linebr("br");

var pn= clabels("label","for","phoneNumber","ContactNo:");
var b7= linebr("br");
var ipn=cinputs("input","type","tel","id","phoneNumber");
var b8= linebr("br");

document.body.append(fn,b1,ifn,b2,mn,b3,imn,b4,ln,b5,iln,b6,pn,b7,ipn,b8);

function clabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
function cinputs(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function linebr(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
