story.add(new Chapter(function(story, space) {

    var Substrate = function(x, y) {
        story.Matter.apply(this, arguments);
        this.type = 'Substrate';
        this.color = '#555';
        this.lifetime = 10;
        this.dieAs = 'Matter';
    };

    Substrate.prototype = new story.Matter();

    story.Matter.prototype.tick = function() {
        story.Energy.prototype.tick.apply(this);

        if (this.type === 'Matter' && this.age > 5) {
            var matter = space.filter(space.surrounding(this), 'Matter');
            if (Math.random() > 0.75 && matter.length > 2) {
                space.add(new story.Substrate(this.x, this.y));
            }
        }
    };

    story.Substrate = Substrate;

}, 'From this raw matter,<br />a substrate emerged.'));