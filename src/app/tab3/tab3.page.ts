import { TabsPage } from './../tabs/tabs.page';
import { Component } from '@angular/core';
import { Beast } from '../models/beast';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myBeast: Beast = new Beast('A');
  otherBeast: Beast = new Beast ('B');
  num: number;
  resultMessage = "-";
  page: TabsPage = new TabsPage();
  attackResult: String = "";

  constructor() {
    this.getRandomBeast();
    this.myBeast.strength = 3;
  }

  onChangeHandler(event: string){
    console.log(event);

    this.myBeast.selectedAttack = event;

  }

  attackRound(){
    if(this.myBeast.selectedAttack == ""){
      this.resultMessage = "no attack selected"
    } else {
      this.resultMessage = "";
      this.attack(this.myBeast, this.otherBeast);
      this.otherBeast.selectedAttack = this.randomlySelectAttack();
      this.attack(this.otherBeast, this.myBeast);
    }
  }

  attack(beast1: Beast, beast2: Beast){
    // beast1 attacks beast2
    this.resultMessage += beast1.name + " attacked " + beast2.name + " with " + beast1.selectedAttack;
    switch (beast1.selectedAttack){
      case "Bite":
        this.attackResult = this.biteAttack(beast1, beast2);
        break;
      case "Claw":
        this.attackResult = this.clawAttack(beast1, beast2);
        break;
      case "Grapple":
        this.attackResult = this.grappleAttack(beast1, beast2);
        break;
    }
    // this.attackResult = this.biteAttack(beast1, beast2);
    // this.num = this.page.randomNumber(1);
    // console.log(this.num);
    if(this.attackResult == "hit"){
      this.resultMessage += " and hit! ";
    } else {
      this.resultMessage += " and missed! ";
    }
  }

  attackRoll(){
    return this.page.randomNumber(10) - this.page.randomNumber(10);
  }

  biteAttack(beast1: Beast, beast2: Beast){
    this.num = this.attackRoll() + beast1.bite + beast1.strength + beast1.strength + beast1.endurance
                - beast2.speed - beast2.speed - beast2.endurance;
    console.log("attack roll: " + this.num);
                
    if(this.num > 0){
      this.num = (beast1.strength + beast1.bite - beast2.endurance + this.attackRoll());
      if (this.num < 0){
        this.num = 0;
      }
      beast2.health -= this.num;
      console.log("damage: " + this.num);
      return "hit";
    }
    return "miss";
  }

  clawAttack(beast1: Beast, beast2: Beast){
    this.num = this.attackRoll() + beast1.claw + beast1.strength + beast1.speed + beast1.speed
                - beast2.strength - beast2.speed - beast2.strength;
    console.log("attack roll: " + this.num);
                
    if(this.num > 0){
      this.num = (beast1.strength + beast1.claw - beast2.endurance + this.attackRoll());
      if (this.num < 0){
        this.num = 0;
      }
      beast2.health -= this.num;
      console.log("damage: " + this.num);
      return "hit";
    }
    return "miss";
  }

  grappleAttack(beast1: Beast, beast2: Beast){
    this.num = this.attackRoll() + beast1.grapple + beast1.strength + beast1.speed + beast1.endurance
                - beast2.strength - beast2.speed - beast2.endurance;
    console.log("attack roll: " + this.num);
                
    if(this.num > 0){
      this.num = (beast1.strength + beast1.grapple - beast2.endurance + this.attackRoll());
      if (this.num < 0){
        this.num = 0;
      }
      beast2.health -= this.num;
      console.log("damage: " + this.num);
      return "hit";
    }
    return "miss";
  }

  randomlySelectAttack(){
    this.num = this.page.randomNumber(2);
    switch (this.num){
      case 0:
        return "Bite";
      case 1:
        return "Claw";
      case 2:
        return "Grapple";
    }

  }

  getRandomBeast(){
    this.num = this.page.randomNumber(4);
    console.log(this.num);

    switch(this.num){
      case 0:
          this.otherBeast.imageURL = "../assets/monA.jpg";
          break;            
      case 1:
          this.otherBeast.imageURL = "../assets/monB.jpg";
          break;
      case 2:
          this.otherBeast.imageURL = "../assets/monC.jpg";
          break;            
      case 3:
          this.otherBeast.imageURL = "../assets/monD.jpg";
          break;
      case 4:
          this.otherBeast.imageURL = "../assets/monE.jpg";
          break;
    }
  }
}
