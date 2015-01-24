story.add(new Chapter(function(story, space) {

    var Sensor = function(x, y) {
        story.Cell.apply(this, arguments);
        this.type = 'Sensor';
        this.color = '#b12';
        this.lifetime = 100;
        this.generation = 0;
        this.dieAs = 'Substrate';
        this.consumption = ['Substrate', 'Cell'];
        this.sensors = {
            touch: function() {
                return space.surrounding(this);
            }
        };
    };

    Sensor.prototype = new story.Cell();

    story.Sensor = Sensor;

}, 'Out of the tenth generation of cells, it would become able to sense what is around them.'));