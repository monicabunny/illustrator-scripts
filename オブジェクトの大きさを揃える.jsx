var dia = new Window("dialog", "オブジェクトの大きさを揃える", [0,0,250,190]);
	dia.pane1 = dia.add("panel",[5,15,240,65],"サイズの基準");
	dia.radi1 = dia.pane1.add("radiobutton",[10,15,60,35],"幅", );
	dia.radi2 = dia.pane1.add("radiobutton",[70,15,120,35],"高さ");
	dia.pane2 = dia.add("panel",[5,85,240,140],"サイズ");
	dia.tex1 = dia.pane2.add("edittext",[10,15,100,35]);
	dia.add("statictext",[110,110,240,130],"px");
	dia.bot1 = dia.add("button",[20,150,100,175],"実行", { name:"ok"});
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