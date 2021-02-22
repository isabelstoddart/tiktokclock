// Clock Class
class Clock{
	constructor(dayTime,sender,react,cont,hr,min){
		this.dayTime = dayTime
		this.hr = hr
		this.min = min
		this.sender = sender
		this.react = react
		this.cont = cont
	}

	buildClock() {
		if(this.dayTime == "AM"){
			background(255, 252, 187);
		} else if(this.dayTime == "PM") {
			background(5, 55, 82);
		}

		translate(730, 375);
		rotate(-90);

		if(this.sender == "Ayashe"){
			strokeWeight(10);
			stroke(105,201,208);
			//stroke(32,5,137);
			fill(255);
			ellipse(0,0,400,400);
		}
		else if(this.sender == "Isabel"){
			strokeWeight(10);
			stroke(238,29,82);
			fill(255);
			ellipse(0,0,400,400);
		}

		if(this.cont == "Miscellaneous"){
            let minuteAngle = map(this.min, 0, 60, 0, 360);
	
	        let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
  
	        push();
	        rotate(minuteAngle);
	        stroke(150, 100, 255);
	        line(0, 0, 75, 0);
	        pop();
  
	        push();
	        rotate(hourAngle);
	        stroke(150,100,255);
	        line(0, 0, 50, 0);
	        pop();
            }
        else if(this.cont == "Political"){
            let minuteAngle = map(this.min, 0, 60, 0, 360);
	
	        let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
  
	        push();
	        rotate(minuteAngle);
	        stroke(150, 255, 100);
	        line(0, 0, 75, 0);
	        pop();
  
	        push();
	        rotate(hourAngle);
	        stroke(150, 255, 100);
	        line(0, 0, 50, 0);
	        pop();
        }
        else if(this.cont == "TV Shows"){
            let minuteAngle = map(this.min, 0, 60, 0, 360);
	
	        let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
  
	        push();
	        rotate(minuteAngle);
	        stroke(255, 131, 0);
	        line(0, 0, 75, 0);
	        pop();
  
	        push();
	        rotate(hourAngle);
	        stroke(255, 131, 0);
	        line(0, 0, 50, 0);
	        pop();
        }
        else if(this.cont == "Movies"){
            let minuteAngle = map(this.min, 0, 60, 0, 360);
	
	        let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
  
	        push();
	        rotate(minuteAngle);
	        stroke(247,247,73);
	        line(0, 0, 75, 0);
	        pop();
  
	        push();
	        rotate(hourAngle);
	        stroke(247,247,73);
	        line(0, 0, 50, 0);
	        pop();
        }

        else if(this.cont == "Actors"){
            let minuteAngle = map(this.min, 0, 60, 0, 360);
	
	        let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
  
	        push();
	        rotate(minuteAngle);
	        stroke(27,3,163);
	        line(0, 0, 75, 0);
	        pop();
  
	        push();
	        rotate(hourAngle);
	        stroke(27,3,163);
	        line(0, 0, 50, 0);
	        pop();
        }

        else if(this.cont == "Music"){
			let minuteAngle = map(this.min, 0, 60, 0, 360);
			console.log(minuteAngle);
	
			let hourAngle = map(this.hr % 12, 0, 12, 0, 360);
			//console.log(hourAngle);
  
	        push();
	        rotate(minuteAngle);
	        stroke(255,110,199);
	        line(0, 0, 75, 0);
	        pop();
  
	        push();
	        rotate(hourAngle);
	        stroke(255,110,199);
	        line(0, 0, 50, 0);
	        pop();
		}
		
		if(this.react == "HAHA"){
			//HAHA
			stroke(25);
			strokeWeight(2);
			fill(0);
			ellipse(0,0,15,15);
		}

		else if(this.react == "Thumbs Down"){
			//Thumbs down
			stroke(25);
			strokeWeight(2);
			fill(0);
			triangle(-5,0,5,-5,5,5);
		}

		else if(this.react == "Heart"){
			//Heart
			stroke(25);
			strokeWeight(2);
			fill(0);

			rotate(25);
			ellipse(0,7,25,10);
			rotate(-50);
			ellipse(-1,-5,25,10);
		}

		else if(this.react == "Thumbs Up"){
		//Thumbs Up
		stroke(25);
		strokeWeight(2);
		fill(0);
		triangle(5,0,-5,5,-5,-5);
		}

		else if(this.react == "Question"){
			//Question
			stroke(25);
			strokeWeight(2);
			fill(0);
			ellipse(0,0,25,10);
		}

		else if(this.react == "Emphasized"){
			//Emphasis
			stroke(25);
			strokeWeight(2);
			fill(0);
			rect(-10,-10,15,15);
		}

        //stroke(255);
	    //point(0, 0);

    }
    
}

function preload(){
	table = loadTable('tiktokData.csv','csv','header');
}

let table;
let toks = [];

function setup() {
	createCanvas(1480, 800);
	angleMode(DEGREES);
	frameRate(2);
    
	const Data = table.getRows();
	const length = table.getRowCount();

	for(let i = 0; i < length; i++){
		const time = Data[i].getString("TimeSent");
		dayTime = time.slice(-2);
		hr = time.split(':')[0];
		min = time.split(':')[1].split(' ')[0];
		sender = Data[i].getString("Sender");
		react = Data[i].getString("TextReactionofReciever");
		cont = Data[i].getString("ContentCategories");
        
		tiktok = new Clock(dayTime,sender,react,cont,hr,min);
        toks.push(tiktok);
	}
	
    x = 0;

}
  
function draw() {

    if (x < 337){
        toks[x].buildClock();
        x = x+1;
	}
	
	// clock = new Clock("AM","Ayashe","HAHA","Movies","4","40");
	// clock.buildClock();
  }