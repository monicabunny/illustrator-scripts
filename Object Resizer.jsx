var dia = new Window("dialog", "Change the size of objects", [0,0,250,190]);
  dia.pane1 = dia.add("panel",[5,15,240,65],"Standard length");
  dia.radi1 = dia.pane1.add("radiobutton",[10,15,100,35],"width", );
  dia.radi2 = dia.pane1.add("radiobutton",[85,15,150,35],"height");
  dia.pane2 = dia.add("panel",[5,85,240,125],"Resize to");
  dia.tex1 = dia.pane2.add("edittext",[10,10,100,30]);
  dia.add("statictext",[110,100,240,120],"px");
  dia.bot1 = dia.add("button",[15,140,100,170],"OK", { name:"ok"});
  dia.radi1.value=true;
  dia.center();
  dia.show();
  
sel = activeDocument.selection;
for (i=0; i<sel.length; i++)
{
  if(dia.radi1.value){
    checked=sel[i].width;
  }else{
    checked=sel[i].height;
  }
  aspectRatio=dia.tex1.text/checked*100;
  sel[i].resize(aspectRatio, aspectRatio,true,true,true,true,aspectRatio,Transformation.CENTER);
}
