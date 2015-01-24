story.add(new Chapter(function(story, space) {

    story.Sensor.prototype.tick = function() {
        story.Cell.prototype.tick.apply(this);
        if (this.type === 'Sensor') {
            var all = space.filter(this.sensors.touch(), this.consumption),
                position = this.getBestNextPosition(all);
            if (!!position) {
                this.move(position.x, position.y);
            }
        }
    };

    story.Sensor.prototype.getBestNextPosition = function(selection) {
        var top = 0, right = 0, bottom = 0, left = 0, i, l = selection.length, item, res = [
                {id: 'top', value: 0},
                {id: 'right', value: 0},
                {id: 'bottom', value: 0},
                {id: 'left', value: 0},
            ];
        for (i = 0; i < l; i += 1) {
            item = selection[i];
            if (item.y < this.y) {res[0].value += 1;}
            if (item.x > this.x) {res[1].value += 1;}
            if (item.y > this.y) {res[2].value += 1;}
            if (item.x < this.x) {res[3].value += 1;}
        }

        res.sort(function(a, b) {
            return a.value - b.value;
        });

        if (res[0].value > 0) {
            switch (res[0].id) {
                case 'top': return {x: this.x, y: this.y - 1};
                case 'right': return {x: this.x + 1, y: this.y};
                case 'bottom': return {x: this.x, y: this.y + 1};
                case 'left': return {x: this.x - 1, y: this.y};
            }
        }
        return null;
    };

    story.Sensor.prototype.move = function(x, y) {
        var item = space.getAt(x, y);
        space.setAt(x, y, this);
        space.setAt(this.x, this.y, item);
    };



}, 'It could sense what was surround them, and move where there were more food.'));