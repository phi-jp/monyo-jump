

tm.define("GameScene", {
    superClass: "Scene",

    init: function() {
        this.superInit();

        this.bg = Sprite('background', SCREEN_WIDTH, SCREEN_HEIGHT-FLOOR_HEIGHT).addChildTo(this);
        this.bg.originX = 0;
        this.bg.originY = 0;

        this.floor = Floor().addChildTo(this);
        this.floor.y = SCREEN_HEIGHT;

        this.player = Monyo().addChildTo(this);

        this.player.setPosition(140, 300);
    },

    update: function() {
        if (this.player.bottom > this.floor.y-FLOOR_HEIGHT) {
            this.app.popScene();
        }
    },

    onpointingstart: function() {
        this.player.jump();
    }
});



tm.define("Monyo", {
    superClass: "Sprite",

    init: function() {
        this.superInit('monyo', 80, 80);

        this.vy = 0;
    },

    update: function() {
        this.vy += 0.25;
        this.y += this.vy;

        var angle = Math.min(this.vy, 0);
        this.rotation -= angle;
    },

    jump: function() {
        this.vy = -16;
    },
});


tm.define("Floor", {
    superClass: "Shape",

    init: function() {
        this.superInit();

        this.width = SCREEN_WIDTH;
        this.height = FLOOR_HEIGHT;
        this.originX = 0;
        this.originY = 1;

        var c = this.canvas;
        var ground = tm.asset.Manager.get("ground");

        (18).times(function(i) {
            c.drawTexture(ground, i*37, 0, 37, FLOOR_HEIGHT);
        });
    }
});
