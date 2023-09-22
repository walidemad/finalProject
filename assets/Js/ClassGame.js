export class Game {
    static counterObjects = 0;
    id = 0;
    name = "";
    version = "";
    company = "";
    releaseDate = "";
    platform = "";
    description = "";
    category = "";
    gamePlay = "";
    requirements = {
        os: "",
        cpu: "",
        ram: "",
        gpu: "",
        directx: "",
        hard_disk: ""
    };
    mainImage = "";
    imagesFromGame = [];
    price = 0;
    isPopular = false;
    isNew = false;
    setId = function () {
        this.id = Game.counterObjects;
        Game.counterObjects += 1;
    }
}