// import 'phaser';
import MainScene from './MainScene.js';

var config = {
	type: Phaser.AUTO,
	parent: 'phaser-example',
	width: 800,
	height: 600,
	scene: MainScene
};

new Phaser.Game(config);
