var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
           
            // TODO: 3 - Add a moon and starfield
            
            var circle;
                for(var i=0;i<100;i++) {
                circle = draw.circle(1,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                    background.addChild(circle);
            }
            var moon = draw.bitmap('img/moon.png');
                moon.x = 900;
                moon.y = 15;
                moon.scaleX = 0.65;
                moon.scaleY = 0.65;
                    background.addChild(moon);
                    
         
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for(var i=0;i<5;++i) {
                var buildingHeight = Math.random() * 300;
                if(buildingHeight <= 200){
                    buildingHeight +=100;
                }
                var buildingColors = ["#283747","#85929E","#D6DBDF","#34495E","#5D6D7E"];
                var building = draw.rect(75,buildingHeight,buildingColors[i],'Black',1);
                    building.x = 200*i;
                    building.y = groundY - buildingHeight;
                        background.addChild(building);
                            buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add a tree
            
            tree = draw.bitmap('img/tree.png');
                tree.x = 100;
                tree.y = groundY -285;
                tree.scaleX = 0.30;
                tree.scaleY = 0.30;
                    background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1.3;
            if(tree.x <-420){
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];
                
                    building.x = building.x -1.3;
                        if(building.x <-420){
                             building.x = canvasWidth;
                        }
            
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
