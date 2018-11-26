function setup() {
	createCanvas(600, 600);
	CenterX = windowWidth/2;
	CenterY = windowHeight/2;
	background(178,18,18);
	frameRate(255)

}

function draw() {
	
	fill(62,81,255,30)

	

	

	
	ellipse(frameCount%600,frameCount%600,40,40)
	
	ellipse(frameCount%200, frameCount%300,40,40)
	
	ellipse(frameCount%300, frameCount%200,40,40)
	
	ellipse(frameCount%-600,600-frameCount%-600,40,40)
	
	ellipse(frameCount%-200, 600-frameCount%-300,40,40)
	
	ellipse(frameCount%-300, 600-frameCount%-200,40,40)
	
	ellipse(600-frameCount%600,frameCount%600,40,40)
	
	ellipse(600-frameCount%200, frameCount%300,40,40)
	
	ellipse(600-frameCount%-300, frameCount%200,40,40)
	
	ellipse(600-frameCount%-600,600-frameCount%600,40,40)
	
	ellipse(600-frameCount%-200, 600-frameCount%300,40,40)
	
	ellipse(600-frameCount%-300, 600-frameCount%200,40,40)
}
