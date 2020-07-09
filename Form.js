class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2', "CAR RACING GAME");
        title.position(130,0);
        var input = createInput("name");
        input.position(130,160);
        var greeting = createElement('h3');
        var button = createButton('PLAY')
        button.position(250,200);
    }
}