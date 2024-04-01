import { DataApiService } from '../../services/data-api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { SpinnerComponent } from '../shared-components/spinner/spinner.component';
import { LinkifyPipe } from '../../pipes/linkify.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LoaderService],
  imports: [SpinnerComponent, LinkifyPipe, CommonModule]
})
export class HomeComponent implements OnInit {
  skills: any;
  featuredProjects: any;
  certificates: any;
  workExperience: any;
  profile: any;
  showMobileImages = false;

  constructor(
    public dataApi: DataApiService,
    private loaderService: LoaderService
  ) {}

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
  onresize(event: any): void {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    //https://stackoverflow.com/questions/77514292/angular-17-window-not-defined
    if (typeof window !== "undefined") {
      window.innerWidth <= 768 ? this.showMobileImages = true : this.showMobileImages = false;
   }
  }
}
