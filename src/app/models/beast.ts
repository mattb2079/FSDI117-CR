export class Beast {
    public name: string;
    public imageURL: string;
    public strength: number;
    public speed: number;
    public endurance: number;
    public health: number;
    public bite: number;
    public claw: number;
    public grapple: number;
    public losses: number;
    public wins: number;
    public trainingPoints: number;
    public selectedAttack: string;

    constructor(monType: string){
        this.name = "Unknown";
        this.imageURL = "../assets/monE.jpg";
        this.strength = 1;
        this.speed = 1;
        this.endurance = 1;
        this.health = 100;
        this.bite = 1;
        this.claw = 1;
        this.grapple = 1;
        this.losses = 0;
        this.wins = 0;
        this.trainingPoints = 3;
        this.selectedAttack = "";

        switch(monType){
            case 'A':
                this.imageURL = "../assets/monA.jpg";
                break;            
            case 'B':
                this.imageURL = "../assets/monB.jpg";
                break;
            case 'C':
                this.imageURL = "../assets/monC.jpg";
                break;            
            case 'D':
                this.imageURL = "../assets/monD.jpg";
                break;
            case 'E':
                this.imageURL = "../assets/monE.jpg";
                break;
        }
    }

}