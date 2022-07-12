var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById('myAudio');
var imagemObjeto = " ";
function newImage(){
	fabric.Image.fromURL("cartao.jpg", function(Img){
        imagemObjeto = Img;
        imagemObjeto.scaleToWidth(800);
        imagemObjeto.scaleToHeight(600);
        imagemObjeto.set({
            top: 0,
            left:0
        });
        canvas.add(imagemObjeto);
    });
}
function playSound(){
	x.play();
}