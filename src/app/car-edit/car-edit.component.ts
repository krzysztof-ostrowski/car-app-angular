import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CarService, Car } from '../car.service';

@Component({
  selector: 'app-car-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  car: Car = { id: 0, brand: '', model: '', year: 0 };

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const carId = +id;
      this.carService.getCar(carId).subscribe(
        (car) => (this.car = car),
        (error) => console.error('Error fetching car:', error)
      );
    } else {
      console.error('Invalid car id');
    }
  }

  updateCar(): void {
    this.carService.updateCar(this.car.id, this.car).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
