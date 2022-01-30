// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {

    Download_Image: () => save(),
    N:50,

}

gui.add(params, "Download_Image")
gui.add(params,"N",10,200,1)



// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(101);
    //101
    //101012
    background( 253, 241, 229 );

    translate(width/2,height/2);

    //points de départ tracé noir
    let l= 200;
    let p1x = width/2 -70 - l;
    let p2x = p1x + l;
    let p1y = height/2 -50;
    let p2y = p1y-l;
    
    
    //points de départ tracé rouge
    let p1xr = width/2 -50 - l;
    let p2xr = p1xr + l;
    let p1yr = height/2 -50 -40;
    let p2yr = p1yr -l;

    //point de départ tracé bleu
    let p1xb = width/2 -50 - l + 30;
    let p2xb = p1xb + l;
    let p1yb = height/2 -50;
    let p2yb = p1yb -l;

    //points de départ tracé orange
    let p1xo = width/2 -50 - l + 30;
    let p2xo = p1xo + l;
    let p1yo = height/2 -50 -40;
    let p2yo = p1yo -l;
    

    let count=0;
    
    //rouge
    stroke(225,20,0);
    strokeWeight(1);
    line(p1xr,p1yr,p2xr,p1yr);


    //bleu
    stroke(34,62,103);
    strokeWeight(1);
    line(p1xb,p1yb,p2xb,p1yb);


    //orange
    stroke(225,20,0);
    strokeWeight(0.8);
    line(p1xo,p1yo,p2xo,p1yo);


    //noir
    stroke(0);
    strokeWeight(4);
    line(p1x,p1y,p2x,p1y);

    

    
    //rouge
    stroke(225,20,0);
    strokeWeight(1);
    line(p1xr,p1yr,p1xr,p2yr);

    //bleu
    stroke(34,62,103);
    strokeWeight(1);
    line(p1xb,p1yb,p1xb,p2yb);

    //orange
    stroke(225,20,0);
    strokeWeight(0.8);
    line(p1xo,p1yo,p1xo,p2yo);

    //noir
    stroke(0);
    strokeWeight(4);
    line(p1x,p1y,p1x,p2y);

    

    while(count<params.N)
    {
        
        if(count %2 == 0)
        {
            l = random(3,100) ;
            if(random()<0.5 && p1x-l -150> -width/2 )
            {
                
                //rouge
                stroke(225,20,0);
                strokeWeight(1);
                line(p1xr,p2yr,p1xr-l,p2yr);

                //bleu
                stroke(34,62,103);
                strokeWeight(1);
                line(p1xb,p2yb,p1xb-l,p2yb);

                //orange
                stroke(225,20,0);
                strokeWeight(0.8);
                line(p1xo,p2yo,p1xo-l,p2yo);

                //noir
                stroke(0);
                strokeWeight(4);
                line(p1x,p2y,p1x-l,p2y);
                
                p1x = p1x-l;
                p1xr= p1xr-l;
                p1xb = p1xb -l;
                p1xo= p1xo -l;
            }

            else if (p1x+l+150<width/2 )
            {
               
                
                //rouge
                stroke(225,20,0);
                strokeWeight(1);
                line(p1xr,p2yr,p1xr+l,p2yr);

                //bleu
                stroke(34,62,103);
                strokeWeight(0.8);
                line(p1xb,p2yb,p1xb+l,p2yb);

                //orange
                stroke(225,20,0);
                strokeWeight(0.8);
                line(p1xo,p2yo,p1xo+l,p2yo);

                //noir
                stroke(0);
                strokeWeight(4);
                line(p1x,p2y,p1x+l,p2y);
              
                p1x = p1x+l;
                p1xr = p1xr + l;
                p1xb = p1xb + l; 
                p1xo = p1xo +l;
            }

            else 
            {
                count --;
            }
            
        }

        else
        {
            l=random(100,400);
            if(random()<0.5  && p2y -l -30> -height/2)
            {
                
                //rouge
                stroke(225,20,0);
                strokeWeight(1);
                line(p1xr,p2yr,p1xr,p2yr -l);

                //bleu
                stroke(34,62,103);
                strokeWeight(1);
                line(p1xb,p2yb,p1xb,p2yb -l);

                //orange
                stroke(225,20,0);
                strokeWeight(0.8);
                line(p1xo,p2yo,p1xo,p2yo-l);

                //noir
                stroke(0);
                strokeWeight(4);
                line(p1x,p2y,p1x,p2y -l);

                p2y = p2y -l;
                p2yr = p2yr -l;
                p2yb = p2yb -l;
                p2yo = p2yo -l;
            }

            else if(p2y +l  +100<height/2)
            {
                
                //rouge
                stroke(225,20,0);
                strokeWeight(1);
                line(p1xr,p2yr,p1xr,p2yr +l);

                //bleu
                stroke(34,62,103);
                strokeWeight(1);
                line(p1xb,p2yb,p1xb,p2yb +l);

                //orange
                stroke(225,20,0);
                strokeWeight(0.8);
                line(p1xo,p2yo,p1xo,p2yo+l);

                //noir
                stroke(0);
                strokeWeight(4);
                line(p1x,p2y,p1x,p2y +l);

                p2y = p2y +l;
                p2yr= p2yr +l;
                p2yb = p2yb +l;
                p2yo = p2yo +l;
            }
            
            else{
                count --;
            }
           
        }
        count ++;
    }
    



}




// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}