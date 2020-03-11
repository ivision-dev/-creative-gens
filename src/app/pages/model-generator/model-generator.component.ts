import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from 'src/app/core/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared.service';
@Component({
  selector: 'app-model-generator',
  templateUrl: './model-generator.component.html',
  styleUrls: ['./model-generator.component.scss']
})
export class ModelGeneratorComponent implements OnInit {
  public FAQData=[];
  public inputImagesData=[];
  public inputImage:string;
  public outputImagesData=[];
  public outputImage:string;
  public FAQanswer:string;
  public FAQquestion:string;
  public validateModel:FormGroup;
  public inputImagesId=[];
  public outputImagesId=[];
 
 //  public inputImageFlag:boolean=false;
   constructor(public http:HttpClient,public projectService: ProjectService, public router: Router,public sharedService:SharedService) { 
    this.sharedService.showingSpinner();
   }
 
   ngOnInit(): void {
 
     this.validateModel = new FormGroup({
       'modelId': new FormControl(null, Validators.required),      
       'modelName': new FormControl(null, Validators.required),
       'inputSize': new FormControl(null, Validators.required),
       'imageSize': new FormControl(null, Validators.required),
     });
 
     this.projectService.getInputImagesType().subscribe((response:any) => {
       this.inputImagesData=response;
       this.sharedService.hidingSpinner();
     })
 
     this.projectService.getOutputImagesType().subscribe((response:any) => {
       this.outputImagesData=response;
       this.sharedService.hidingSpinner();
     })
    
   }
   submit() {
     this.validateModel.valid;
     if(this.validateModel.valid) {
      this.sharedService.showingSpinner();
       this.FAQData.map((item) => {
         item.modelId=this.validateModel.get('modelId').value;
         this.projectService.postFAQ(item).subscribe();
       })
 
       let item={
         modelId: this.validateModel.get('modelId').value,
         modelName: this.validateModel.get('modelName').value,
         maxInputsize: this.validateModel.get('inputSize').value,
         maxImaegeSize: this.validateModel.get('imageSize').value,
         inputImages:this.inputImagesId,
         outputImages:this.outputImagesId
       }
 
       this.projectService.postModel(item).subscribe((response) => {
          console.log("model register successfully");
          this.validateModel.reset();
          this.sharedService.hidingSpinner();
          this.router.navigate(['./imageGenerator']);
       })
 
     } else {
       this.validateAllFields(this.validateModel);
     }
     
   }
 
   validateAllFields(formGroup: FormGroup) {         
     Object.keys(formGroup.controls).forEach(field => {  
         const control = formGroup.get(field);            
         if (control instanceof FormControl) {             
             control.markAsTouched({ onlySelf: true });
         } else if (control instanceof FormGroup) {        
             this.validateAllFields(control);  
         }
     });
 }
   checkInputImages(event,index) {
     event.check=!event.check;           
     if(event.check) {
       this.inputImagesId.push(event.id);
     }
     else {
       this.inputImagesId.splice(this.inputImagesId.indexOf(event.id),1);
     }
   }
 
   checkOutputImages(event,index) {
     event.check=!event.check;           
     if(event.check) {
       this.outputImagesId.push(event.id);
     }
     else {
       this.outputImagesId.splice(this.outputImagesId.indexOf(event.id),1)
     }
   }
 
   addInputImage() {
     if(this.inputImage) {
      this.sharedService.showingSpinner();
       this.projectService.postInputImagesType({name:this.inputImage}).subscribe((response) => {
         this.inputImagesData.push(response);
         this.inputImage='';
         this.sharedService.hidingSpinner();
       });
     }
   }
 
   removeInputImage(item) {
    this.sharedService.showingSpinner();
       this.projectService.deleteInputImagesType(item.id).subscribe((response) => {
         this.inputImagesData.splice(this.inputImagesData.indexOf(item),1);
         this.sharedService.hidingSpinner();
       });
   }
   removeOutputImage(item) {
    this.sharedService.showingSpinner();
     this.projectService.deleteOutputImagesType(item.id).subscribe((response) => {
       this.outputImagesData.splice(this.outputImagesData.indexOf(item),1);
       this.sharedService.hidingSpinner();
     });
 }
 
   addOutputImage() {
     if(this.outputImage) {
      this.sharedService.showingSpinner();
       this.projectService.postOutputImagesType({name:this.outputImage}).subscribe((response) => {
         this.outputImagesData.push(response);
         this.outputImage='';
         this.sharedService.hidingSpinner();
       });
     }
   }
   
 
   addFAQ() {
     if(this.FAQanswer && this.FAQquestion) {
       this.FAQData.unshift({question:this.FAQquestion, answer:this.FAQanswer});
       this.FAQanswer='';
       this.FAQquestion='';
     }
   }
 
   removeFAQ(item) {
     this.FAQData.splice(this.FAQData.indexOf(item),1);
   }
 }
 