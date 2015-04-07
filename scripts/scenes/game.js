

tm.define("GameScene", {
    superClass: "Scene",

    init: function() {
        this.superInit();

        this.floor = Floor().addChildTo(this);
        this.floor.y = SCREEN_HEIGHT;

        this.player = Monyo().addChildTo(this);

        this.player.setPosition(140, SCREEN_HEIGHT-FLOOR_HEIGHT);
    },

    update: function() {

    },

    onpointingstart: function() {
        this.player.jump();
    }
});



tm.define("Monyo", {
    superClass: "CircleShape",

    init: function() {
        this.superInit({
            fillStyle: "hsl(190, 80%, 60%)",
        });

        this.vy = 0;
    },

    update: function() {
        this.vy += 1;
        this.y += this.vy;
    },

    jump: function() {
        this.vy = -16;
    },
});


tm.define("Floor", {
    superClass: "RectangleShape",

    init: function() {
        this.superInit({
            fillStyle: 'green',
        });

        this.width = SCREEN_WIDTH;
        this.height = FLOOR_HEIGHT;
        this.originX = 0;
        this.originY = 1;
    }
});
