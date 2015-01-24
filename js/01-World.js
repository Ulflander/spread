story.add(new Chapter(function(story) {

    var Space = function() {
        this.grid = [];
        this.size = 20;

        var x, y, self = this;
        for (x = 0; x < this.size; x += 1) {
            this.grid[x] = [];
            for (y = 0; y < this.size; y += 1) {
                this.add(new Void(x, y));
            }
        }

        this.paused = false;
        setInterval(function() {
            if (!self.paused) {
                self.tick();
            }
        }, 10)
    };

    Space.prototype.add = function(item) {
        this.grid[item.x][item.y] = item;
    };

    Space.prototype.setAt = function(x, y, item) {
        this.grid[x][y] = item;
    };

    Space.prototype.getAt = function(x, y) {
        return this.grid[x][y];
    };

    Space.prototype.exists = function(x, y) {
        return x >= 0 && y >= 0 && x < this.size && y < this.size;
    };

    Space.prototype.tick = function() {
        var x, y, self = this;
        for (x = 0; x < this.size; x += 1) {
            for (y = 0; y < this.size; y += 1) {
                this.grid[x][y].tick();
            }
        }
    };
    Space.prototype.one = function(selection) {
        if (selection.length > 0) {
            return selection[rand(0, selection.length)];
        }
        return null;
    };
    Space.prototype.some = function(selection, count) {
        var arr = [];
        if (selection.length > 0) {
            while (count > 0) {
                arr.concat(selection.splice(rand(0, selection.length), 1));
                count -= 1;
            }
        }
        return arr;
    };

    Space.prototype.filter = function(selection, types) {
        if (typeof types === 'string') {
            types = [types];
        }
        var l;
        for (l = selection.length - 1; l > -1; l -= 1) {
            if (types.indexOf(selection[l].type) === -1) {
                selection.splice(l, 1);
            }
        }
        
        return selection;
    }

    Space.prototype.surrounding = function(item) {
        var arr = [],
            x = item.x,
            y = item.y;

        if (this.exists(x - 1, y - 1)) {
            arr.push(this.grid[x - 1][y - 1]);
        }
        if (this.exists(x - 1, y)) {
            arr.push(this.grid[x - 1][y]);
        }
        if (this.exists(x - 1, y + 1)) {
            arr.push(this.grid[x - 1][y + 1]);
        }
        if (this.exists(x, y - 1)) {
            arr.push(this.grid[x][y - 1]);
        }
        if (this.exists(x, y + 1)) {
            arr.push(this.grid[x][y + 1]);
        }
        if (this.exists(x + 1, y - 1)) {
            arr.push(this.grid[x + 1][y - 1]);
        }
        if (this.exists(x + 1, y)) {
            arr.push(this.grid[x + 1][y]);
        }
        if (this.exists(x + 1, y + 1)) {
            arr.push(this.grid[x + 1][y + 1]);
        }

        return arr;
    };

    var Void = function(x, y) {
        this.x = x;
        this.y = y;
        this.type = 'Void';
        this.color = '#333';
    };

    Void.prototype.tick = function() {

    };

    story.space = new Space();
    story.Void = Void;

    Mousetrap.bind('space', function() {
        story.space.paused = !story.space.paused;
    });

    Mousetrap.bind('right', function() {
        story.space.tick();
    });

}, 'It was a space,<br />filled of void.'));