var Story = function() {
    this.space = null;
    this.chapters = [];
    this.current = -1;
};

Story.prototype.next = function() {
    if (this.hasNext()) {
        this.current += 1;
        this.chapters[this.current].execute(this, this.space);
    }
};

Story.prototype.add = function(chapter) {
    this.chapters.push(chapter);
};

Story.prototype.hasNext = function() {
    return this.current < this.chapters.length - 1;
};


var rand = function(min, max) {
    return parseInt(Math.random() * (max - min) + min, 10);
};

var Chapter = function(func, text) {
    this.func = func;
    this.text = text;
};

Chapter.prototype.execute = function(story, space) {
    document.querySelector('.story').innerHTML = this.text;
    this.func(story, space);
};


var story = new Story();

story.add(new Chapter(function() {
    document.querySelector('body').addEventListener('click', function() {
        story.next();
    });
}, 'Once upon a time,<br />a story began.'));

story.next();