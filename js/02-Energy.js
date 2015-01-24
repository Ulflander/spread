story.add(new Chapter(function(story, space) {

    var Energy = function(x, y) {
        story.Void.apply(this, arguments);
        this.type = 'Energy';
        this.color = '#fff';
        this.age = 0;
        this.lifetime = Infinity;
    };

    Energy.prototype = new story.Void();

    story.Energy = Energy;

    space.add(new Energy(Math.ceil(space.size / 2), Math.floor(space.size / 2)));


}, 'Into this void,<br />something appeared.<br />Pure energy.'));