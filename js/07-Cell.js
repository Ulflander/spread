story.add(new Chapter(function(story, space) {

    var Cell = function(x, y) {
        story.Substrate.apply(this, arguments);
        this.type = 'Cell';
        this.color = '#712';
        this.lifetime = 30;
        this.generation = 0;
        this.dieAs = 'Substrate';
        this.consumption = ['Substrate'];
    };

    Cell.prototype = new story.Substrate();

    story.Cell = Cell;

}, 'From this raw substrate. Living cells. Living!'));