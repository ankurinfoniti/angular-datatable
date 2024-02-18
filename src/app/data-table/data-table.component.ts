import { Component } from '@angular/core';

interface Supplier {
  name: string;
  address: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  currentPage: number = 1;
  pageSize: number = 5;

  suppliers: Supplier[] = [
    {
      name: 'Supplier 1',
      address: 'Address 1',
      email: 'supplier1@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 2',
      address: 'Address 2',
      email: 'supplier2@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 3',
      address: 'Address 3',
      email: 'supplier3@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 4',
      address: 'Address 4',
      email: 'supplier4@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 5',
      address: 'Address 5',
      email: 'supplier5@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 6',
      address: 'Address 6',
      email: 'supplier6@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 7',
      address: 'Address 7',
      email: 'supplier7@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 8',
      address: 'Address 8',
      email: 'supplier8@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 9',
      address: 'Address 9',
      email: 'supplier9@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 10',
      address: 'Address 10',
      email: 'supplier10@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 11',
      address: 'Address 11',
      email: 'supplier11@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 12',
      address: 'Address 12',
      email: 'supplier12@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 13',
      address: 'Address 13',
      email: 'supplier13@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 14',
      address: 'Address 14',
      email: 'supplier14@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 15',
      address: 'Address 15',
      email: 'supplier15@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 16',
      address: 'Address 16',
      email: 'supplier16@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 17',
      address: 'Address 17',
      email: 'supplier17@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 18',
      address: 'Address 18',
      email: 'supplier18@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 19',
      address: 'Address 19',
      email: 'supplier19@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 20',
      address: 'Address 20',
      email: 'supplier20@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 21',
      address: 'Address 21',
      email: 'supplier21@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 22',
      address: 'Address 22',
      email: 'supplier22@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 23',
      address: 'Address 23',
      email: 'supplier23@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 24',
      address: 'Address 24',
      email: 'supplier24@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 25',
      address: 'Address 25',
      email: 'supplier25@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 26',
      address: 'Address 26',
      email: 'supplier26@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 27',
      address: 'Address 27',
      email: 'supplier27@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 28',
      address: 'Address 28',
      email: 'supplier28@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 29',
      address: 'Address 29',
      email: 'supplier29@gmail.com',
      phone: '123-456-7890',
    },
    {
      name: 'Supplier 30',
      address: 'Address 30',
      email: 'supplier30@gmail.com',
      phone: '123-456-7890',
    },
  ];

  filteredSuppliers: Supplier[] = this.suppliers;

  ngOnInit(): void {
    this.visibleData();
    this.pageNumber();
  }

  visibleData() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;

    return this.filteredSuppliers.slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
    this.visibleData();
  }

  previousPage() {
    this.currentPage--;
    this.visibleData();
  }

  pageNumber() {
    let totalPages = Math.ceil(this.filteredSuppliers.length / this.pageSize);

    return new Array(totalPages);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibleData();
  }

  filterData(searchTerm: string) {
    this.filteredSuppliers = this.suppliers.filter((supplier) => {
      if (
        supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.phone.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return supplier;
      } else {
        return null;
      }
    });

    this.visibleData();
  }
}
