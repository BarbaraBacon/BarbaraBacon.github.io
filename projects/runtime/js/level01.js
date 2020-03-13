var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 4500, "y": groundY - 110},
                { "type": "sawblade", "x": 5000, "y": groundY - 110},
                { "type": "sawblade", "x": 5250, "y": groundY - 15},
                { "type": "sawblade", "x": 5500, "y": groundY - 110},
                { "type": "sawblade", "x": 5700, "y": groundY - 15},
                { "type": "sawblade", "x": 6000, "y": groundY - 110},
                { "type": "sawblade", "x": 6500, "y": groundY - 110},
                { "type": "sawblade", "x": 7000, "y": groundY - 15},
                { "type": "sawblade", "x": 7500, "y": groundY - 15},
                { "type": "sawblade", "x": 7800, "y": groundY - 110},
                { "type": "sawblade", "x": 8000, "y": groundY - 110},
                { "type": "sawblade", "x": 8500, "y": groundY - 15},
                { "type": "sawblade", "x": 8700, "y": groundY - 110},
                { "type": "sawblade", "x": 9000, "y": groundY - 15},
                
                { "type": "spikes", "x": 1000, "y": groundY - 15},
                { "type": "spikes", "x": 1300, "y": groundY - 15},
                { "type": "spikes", "x": 1600, "y": groundY - 15},
                { "type": "spikes", "x": 1700, "y": groundY - 15},
                { "type": "spikes", "x": 2000, "y": groundY - 15},
                { "type": "spikes", "x": 2300, "y": groundY - 15},
                { "type": "spikes", "x": 2500, "y": groundY - 15},
                { "type": "spikes", "x": 2700, "y": groundY - 15},
                { "type": "spikes", "x": 3000, "y": groundY - 15},
                { "type": "spikes", "x": 3100, "y": groundY - 15},
                { "type": "spikes", "x": 3500, "y": groundY - 15},
                { "type": "spikes", "x": 3900, "y": groundY - 15},
                
                { "type": "enemy", "x": 600, "y": groundY - 30},
                { "type": "enemy", "x": 800, "y": groundY - 30},
                { "type": "enemy", "x": 1500, "y": groundY - 30},
                { "type": "enemy", "x": 2500, "y": groundY - 30},
                { "type": "enemy", "x": 2700, "y": groundY - 30},
                { "type": "enemy", "x": 3700, "y": groundY - 30},
                { "type": "enemy", "x": 4800, "y": groundY - 30},
                { "type": "enemy", "x": 5000, "y": groundY - 30},
                { "type": "enemy", "x": 7000, "y": groundY - 30},
                { "type": "enemy", "x": 7500, "y": groundY - 30},
                { "type": "enemy", "x": 8000, "y": groundY - 30},
                { "type": "enemy", "x": 9000, "y": groundY - 30},
                { "type": "enemy", "x": 10000, "y": groundY - 30},
                { "type": "enemy", "x": 15000, "y": groundY - 30},
                
                {"type": "reward", "x":2000, "y": groundY - 100},
                {"type": "reward", "x":7500, "y": groundY- 100},
                
                {"type": "boss", "x":3000, "y": groundY- 15},
                
                //Final Level:
                { "type": "sawblade", "x": 10000, "y": groundY - 110},
                { "type": "sawblade", "x": 10500, "y": groundY - 110},
                { "type": "sawblade", "x": 10800, "y": groundY - 110},
                { "type": "sawblade", "x": 12200, "y": groundY - 110},
                { "type": "sawblade", "x": 12500, "y": groundY - 110},
                { "type": "sawblade", "x": 13500, "y": groundY - 110},
                { "type": "sawblade", "x": 13600, "y": groundY - 15},
                { "type": "sawblade", "x": 13700, "y": groundY - 110},
                { "type": "sawblade", "x": 14100, "y": groundY - 110},
                { "type": "sawblade", "x": 14700, "y": groundY - 110},
                
                { "type": "spikes", "x": 10300, "y": groundY - 15},
                { "type": "spikes", "x": 10900, "y": groundY - 15},
                { "type": "spikes", "x": 11500, "y": groundY - 15},
                { "type": "spikes", "x": 11600, "y": groundY - 15},
                { "type": "spikes", "x": 12100, "y": groundY - 15},
                { "type": "spikes", "x": 12700, "y": groundY - 15},
                { "type": "spikes", "x": 13900, "y": groundY - 15},
                { "type": "spikes", "x": 14000, "y": groundY - 15},
                { "type": "spikes", "x": 14500, "y": groundY - 15},
                { "type": "spikes", "x": 14900, "y": groundY - 15},
                
                { "type": "enemy", "x": 12000, "y": groundY - 30},
                { "type": "enemy", "x": 12500, "y": groundY - 30},
                { "type": "enemy", "x": 12700, "y": groundY - 30},
                { "type": "enemy", "x": 13000, "y": groundY - 30},
                { "type": "enemy", "x": 13200, "y": groundY - 30},
                { "type": "enemy", "x": 13700, "y": groundY - 30},
                { "type": "enemy", "x": 14000, "y": groundY - 30},
                { "type": "enemy", "x": 14600, "y": groundY - 30},
                
                {"type": "reward", "x":10900, "y": groundY - 100},
                {"type": "reward", "x":12700, "y": groundY - 100},
                {"type": "reward", "x":14500, "y": groundY - 100},
               
                
               
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE

       
        function createSawBlade(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            
            game.addGameItem(sawBladeHitZone); 
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        }
        function createVisibleSawBlade(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var VisiblesawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            VisiblesawBladeHitZone.x = x;
            VisiblesawBladeHitZone.y = y;
            
            game.addGameItem(VisiblesawBladeHitZone); 
            
            var obstacleImage = draw.bitmap('');
            VisiblesawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            
        }
        
        for (var key = 0; key < levelData.gameItems.length; key++) {
            var gameItemObject = levelData.gameItems[key];
                if (gameItemObject.type === 'sawblade'){
                    createSawBlade(gameItemObject.x, gameItemObject.y);
                    
                }
                
                if (gameItemObject.type === 'spikes'){
                    createSpikes(gameItemObject.x, gameItemObject.y);
                    
                }
                
                if (gameItemObject.type === 'enemy'){
                    createEnemy(gameItemObject.x, gameItemObject.y);
                    
                }
                
                if (gameItemObject.type === 'reward'){
                    createReward(gameItemObject.x, gameItemObject.y);
                    
                }
        }
                
                
                
            function createSpikes(x,y) {
                var hitZoneSize = 15;
                var damageFromObstacle = 10;
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                sawBladeHitZone.x = x;
                sawBladeHitZone.y = y;
                
                game.addGameItem(sawBladeHitZone); 
                
                var obstacleImage = draw.bitmap('img/spike.png');
                sawBladeHitZone.addChild(obstacleImage);
                obstacleImage.x = -20;
                obstacleImage.y = -25;

                
            }  
                

            function createEnemy(x,y) {
                var hitZoneSize = 15;
                var damageFromObstacle = 10;
                var EnemyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                EnemyHitZone.x = x;
                EnemyHitZone.y = y;
                
                var enemy =  game.createGameItem('enemy',20);
                var obstacleImage = draw.bitmap('img/enemy.png');
                enemy.addChild(obstacleImage);
                obstacleImage.x = -30;
                obstacleImage.y =-50;
                
                enemy.x = x;
                enemy.y = y;
                
                game.addGameItem(enemy);
                
                 
               enemy.velocityX = - 1;
               
               enemy.onPlayerCollision = function (){
                   game.changeIntegrity(-30);
                   enemy.fadeOut();
               };
        
        
        
                enemy.onProjectileCollision = function() {
                        game.increaseScore(50);
                        enemy.fadeOut();
                };
            } 
               
            
                //Reward Code Below:
                 function createReward(x,y) {
                var hitZoneSize = 15;
                var damageFromObstacle = 0;
                var RewardHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                RewardHitZone.x = x;
                RewardHitZone.y = y;
                
                var reward =  game.createGameItem('reward',0);
                var obstacleImage = draw.bitmap('img/reward.png');
                reward.addChild(obstacleImage);
                obstacleImage.x = -130;
                obstacleImage.y = -200;
                
                reward.x = x;
                reward.y = y;
                
                game.addGameItem(reward);
                
                 
                reward.velocityX = - 2;
               
               reward.onPlayerCollision = function (){
                   game.changeIntegrity(30);
                   reward.fadeOut();
               };
                 reward().onProjectileCollision = function() {
                        game.increaseScore(100);
                        reward.fadeOut();
                };
            } 
            
            
            
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
