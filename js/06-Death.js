story.add(new Chapter(function(story, space) {

    
    story.Substrate.prototype.consume = function(selection) {
        var i, l = selection.length;
        for (i = 0; i < l; i += 1) {
            selection[i].die();
        }
    };

    story.Substrate.prototype.die = function() {
        space.add(new story[this.dieAs](this.x, this.y));
    };

    story.Substrate.prototype.tick = function() {
        story.Matter.prototype.tick.apply(this);

        if (this.age > this.lifetime - this.lifetime / 5 && Math.random() > 0.80) {
            this.die();
            return;
        }

        if (this.type === 'Substrate' && story.Cell && this.age > 5) {
            var substrate = space.filter(space.surrounding(this), 'Substrate');
            if (Math.random() > 0.75 && substrate.length > 4) {
                this.consume(substrate);
                space.add(new story.Cell(this.x, this.y));
            }
        }
    };

}, 'But this substrate would have a limited lifetime.'));