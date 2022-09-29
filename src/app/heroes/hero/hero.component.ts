import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    name: string = 'Ironman';
    age: number = 45;

    get nameToUpperCase(): string {
        return this.name.toUpperCase();
    }
    getName(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName() {
        this.name = 'Spiderman';
    }
    changeAge() {
        this.age = 30;
    }

}