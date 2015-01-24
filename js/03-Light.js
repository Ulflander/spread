story.add(new Chapter(function(story, space) {


    var stage = new createjs.Stage('spread'),
        x, y,
        shape,
        command,
        light = [];

    for (x = 0; x < space.size; x += 1) {
        light[x] = [];
        for (y = 0; y < space.size; y += 1) {
            shape = new createjs.Shape();

            command = shape.graphics.beginFill("#333").drawCircle(0, 0, 5);

            shape.x = x * 10 + 5;
            shape.y = y * 10 + 5;
            
            stage.addChild(shape);

            light[x][y] = {
                command: command,
                shape: shape
            };
        }
    }

    function handleTick() {
        var item;
        for (x = 0; x < space.size; x += 1) {
            for (y = 0; y < space.size; y += 1) {
                item = space.getAt(x, y);
                shape = light[x][y].shape;
                shape.graphics.clear();
                shape.graphics.beginFill(item.color).drawCircle(0, 0, 5);
                if (item.lifetime < 1000) {
                    shape.alpha = (1 - (item.lifetime - item.age) / item.lifetime / 2);
                } else {
                    shape.alpha = 1;
                }
            }
        }

        stage.update();
    }


    createjs.Ticker.addEventListener("tick", handleTick);
    story.stage = stage;

}, 'Energy would emit light.'));