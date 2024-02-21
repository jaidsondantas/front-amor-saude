import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../shared/services/login.service';
import {CompanyService} from '../../shared/services/company.service';
import {Company} from '../../shared/interfaces/company.interface';
import {Pagination} from 'src/shared/interfaces/pagination.interface';

@Component({
  selector: 'app-dash',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];
  defaultSizePage = 5;
  filter: string = '';

  constructor(
    public readonly loginService: LoginService,
    private readonly companyService: CompanyService
  ) {
  }

  ngOnInit(): void {
    console.log(this.loginService.getUser());
    this.getCompanies();
  }

  getCompanies(filter?: string, pagination?: Pagination): void {
    if (!filter) {
      this.filter = '';
    } else {
      this.filter = filter;
    }
    if (!pagination) {
      pagination = {
        page: 1,
        size: this.defaultSizePage
      }
    }

    this.companyService.get({filter: this.filter, pagination}).subscribe({
      next: (v) => {
        this.companies = v;
      },
    });
  }

  changePage(pagination: Pagination): void {
    this.getCompanies(this.filter, pagination)
  }
}
