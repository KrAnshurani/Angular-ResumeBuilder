import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/resume.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-View Resume',
  templateUrl: './View Resume.component.html',
  styleUrls: ['./View Resume.component.css']
})
export class ViewResumeComponent implements OnInit {
    resumeData: any;
  constructor(private _resumeService: ResumeService) { }

  ngOnInit(): void {
    this._resumeService.getResumeData().subscribe(
      (res) => {
        this.resumeData = res;
        this.resumeData.skills = this.resumeData.skills.split(',');
        this.resumeData.languages = this.resumeData.languages.split(',');
        this.resumeData.experience = this.resumeData.experience.split('|');
        this.resumeData.project = this.resumeData.project.split('|');
        this.resumeData.certification =this.resumeData.certification.split('|');
        this.resumeData.education = this.resumeData.education.split('|');
      },
      (err) => console.error(err)
    );
  }

  download() {
    const resume: any = document.querySelector('#resume');
    html2canvas(resume, { allowTaint: true, useCORS: true }).then((canvas) => {
      const image = canvas.toDataURL('image/jpeg', 1.0);
      const doc = new jsPDF('p', 'px', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = (pageHeight - canvasHeight) / 2;

      doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
      doc.save('Resume.pdf');
    });
  }

  }
