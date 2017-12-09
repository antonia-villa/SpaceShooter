function spawnEnemy(){
	console.log('spawn');
	var enemy = enemies.getFirstExists(false);
	enemy.anchor.setTo(0.5);
	enemy.reset(game.world.width, game.rnd.integerInRange(50, game.world.height - 50));

	enemy.body.velocity.x = -250;
}

function selfDamage(player, enemy){
	var explosion = explosions.getFirstExists(false);
	explosion.reset(player.body.x, player.body.y);
	explosion.play('smallboom'); //animation
	kaboom.play(); // sound

	//TO DO: Add Score later
	enemy.kill();

	player.life -= 25;
	//TO DO: Update HP text on screen

	if(player.life <= 0){
		player.kill();
		//TO DO: Write gameover function
	}
	else if(player.life <= 50){
		player.tint = '0xff0000';
	}
}

