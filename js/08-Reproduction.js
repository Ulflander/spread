story.add(new Chapter(function(story, space) {

    
    story.Cell.prototype.duplicate = function(target) {
        var substrate = space.one(space.filter(space.surrounding(this), 'Substrate')),
            child;
        if (!!substrate) {
            child = new story[target || this.type](substrate.x, substrate.y);
            if (!target) {
                child.generation = this.generation + 1;
            }
            space.add(child);
        }
    };

    story.Cell.prototype.tick = function() {
        story.Substrate.prototype.tick.apply(this);

        if (this.age > this.lifetime - this.lifetime / 5 && Math.random() > 0.80) {
            this.die();
            return;
        }
        
        // Consume
        var food = space.one(space.filter(space.surrounding(this), this.consumption));
        if (food) {
            this.consume([food]);
            this.lifetime += 1;
        } else if (Math.random() > 0.5) {
            this.lifetime -= 1;
        }

        if (this.age > 15) {
            if (this.generation > 5 && Math.random() > 0.8 && this.type === 'Cell') {
                this.duplicate('Sensor');
            } else if (Math.random() > 0.75) {
                this.duplicate();
            }
        }
    };

}, 'It would reproduce!'));