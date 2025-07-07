import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'GEC';

  store = ''

  visibility = false;

  listener(){
    this.visibility = !this.visibility;
    console.log(this.store);
  }

  list = ["apple", "banana", "orange", "grape", "kiwi", "mango", "peach", "pear", "pineapple", "strawberry"];

  
}
  
