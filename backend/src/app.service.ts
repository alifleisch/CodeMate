import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private dummyTrips = [
    { id: 1, name: 'Berlin Marathon', location: 'Berlin', date: '2024-08-20' },
    { id: 2, name: 'SOAD concert', location: 'London', date: '2024-10-15' },
    { id: 3, name: 'Berlin Marathon', location: 'Berlin', date: '2024-08-20' },
    { id: 4, name: 'SOAD concert', location: 'London', date: '2024-10-15' },
    { id: 5, name: 'Berlin Marathon', location: 'Berlin', date: '2024-08-20' },
    { id: 6, name: 'SOAD concert', location: 'London', date: '2024-10-15' }
  ]

  getHello(): string {
    return 'Hello World!';
  }
  getTrips() {
    return this.dummyTrips;
  }

  createTrip(trip: any) {
    const newId = this.dummyTrips.length > 0 ? Math.max(...this.dummyTrips.map(t => t.id)) + 1 : 1;
    const newTrip = { id: newId, ...trip };
    this.dummyTrips.push(newTrip);
    return newTrip;
  }
}
