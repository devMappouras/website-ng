import { DataApiService } from '../../services/data-api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  skills;
  featuredProjects;
  certificates;
  workExperience;
  profile;
  showMobileImages = false;

  constructor(
    public dataApi: DataApiService,
    private loaderService: LoaderService
  ) {  }

  async ngOnInit(): Promise<void> {
    this.loaderService.setLoading(true);
    this.checkWindowSize();
    await this.loadData();
  }

  private async loadData() {
    this.skills = await this.dataApi.getTopSkills();
    this.profile = await this.dataApi.getProfile();
    this.workExperience = await this.dataApi.getWorkHistory();
    this.certificates = await this.dataApi.getCertificates();
    this.featuredProjects = await this.dataApi.getFeaturedProjects();
  }

  @HostListener('window:resize', ['$event'])
  onresize(event): void {
    //console.log('WINDOW_RESIZE_EVENT', event);
    this.checkWindowSize();
  }

  private checkWindowSize() {
    window.innerWidth <= 768 ? this.showMobileImages = true : this.showMobileImages = false;
  }
}
