import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CarService, Car } from '../car.service';

@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent {
  car: Car = { id: 0, brand: '', model: '', year: 0 };

  constructor(private carService: CarService, private router: Router) {}

  addCar(): void {
    this.carService.addCar(this.car).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
