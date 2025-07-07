import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  Email = '';

  Password = '';

  visibility = false;

  listener(){
    console.log("Email = " + this.Email);
    console.log("Password = " + this.Password);
  }
}
  
