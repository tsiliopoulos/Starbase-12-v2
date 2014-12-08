/// <reference path="../managers/asset.ts" />

// Flame Object Class
module objects {
    export class Flame extends createjs.ParticleEmitter {

        // PRIVATE PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++
        private _particle: createjs.Bitmap;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(x, y) {
            this._particle = new createjs.Bitmap(managers.Assets.loader.getResult("explosionParticle"));
            super(this._particle.image);
            this.position = new createjs.Point(x, y);
            this.emitterType = createjs.ParticleEmitterType.Emit;

            this.emissionRate = 50;
            this.maxParticles = 500;
            this.life = 500;
            this.lifeVar = 200;
            this.speed = 200;
            this.speedVar = 30;
            this.positionVarX = 15;
            this.positionVarY = -20;
            this.accelerationX = 0;
            this.accelerationY = 0;
            this.radialAcceleration = 0;
            this.radialAccelerationVar = 0;
            this.tangentalAcceleration = 0;
            this.tangentalAccelerationVar = 0;
            this.angle = -150;
            this.angleVar = 15;
            this.startSpin = 720;
            this.startSpinVar = null;
            this.endSpin = 0;
            this.endSpinVar = null;
            this.startColor = [217, 51, 51];
            this.startColorVar = [180, 50, 80];
            this.startOpacity = 1;
            this.endColor = [255, 0, 0];
            this.endColorVar = [0, 0, 0];
            this.endOpacity = 0;
            this.startSize = 60;
            this.startSizeVar = null;
            this.endSize = 10;
            this.endSizeVar = null;

        }

    }
}  