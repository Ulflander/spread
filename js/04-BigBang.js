story.add(new Chapter(function(story, space) {

    var Matter = function(x, y) {
        story.Energy.apply(this, arguments);
        this.type = 'Matter';
        this.color = '#444';
        this.age = 0;
        this.lifetime = Infinity;
    };

    Matter.prototype = new story.Energy();

    story.Energy.prototype.tick = function() {
        this.age += 1;

        if (this.type === 'Energy') {
            if (this.age > 3) {
                space.add(new story.Matter(this.x, this.y));
            } else if (this.age > 2) {
                var all = space.filter(space.surrounding(this), 'Void'), i, l;
                for (i = 0, l = all.length; i < l; i += 1) {
                    space.add(new story.Energy(all[i].x, all[i].y));
                }
            }
        }
    };

    story.Matter = Matter;

}, 'But ultimately,<br />energy would bang.<br />Big bang.'));