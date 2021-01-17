import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {

  correctAnswer = "A"
  textA = ""
  textB = ""
  textC = ""
  textD = ""
  questionName = ""
  sectionName = ""
  questions  = []
  questionArea  = false
  bolumler : any
  constructor( public db : AngularFireDatabase) {
    this.bolumler = this.db.list("bolumler").valueChanges()
   }

  ngOnInit() {

    
  }


  kaydet (){


    this.db.list('bolumler').push({sectionName : this.sectionName , questions : this.questions});
    this.sectionName = "";
    this.questionArea  = false
    this.questionName  = ""
    this.correctAnswer  = "A" 
    this.textA  = "" 
    this.textB  = ""
    this.textC  = "" 
    this.textD  = ""  
    this.questions = []
  }
  
  bolumuKaldir  (value :string){

    this.db.list('bolumler').remove(value)
  }


  


  showQuestionArea(value : boolean)
  {

    this.questionArea=value
  }
  setCorrectAnswer(value : string)
  {

    this.correctAnswer=value
  }

  

  soruAci(value : string)
  {
    

    this.questionName=value
  }

  

  setSectionName(value : string)
  {

    this.sectionName=value
  }

  cevapA(value : string)
  {

    this.textA=value
  }
  cevapB(value : string)
  {

    this.textB=value
  }
  cevapC(value : string)
  {

    this.textC=value
  }
  cevapD(value : string)
  {

    this.textD=value
  }


  



  soruKayit(){

  

    
    let question = {
      correctAnswer : this.correctAnswer,
      textA : this.textA,
      textB : this.textB,
      textC: this.textC,
      textD : this.textD,
      questionName : this.questionName,

    }

    this.questions.push(question)

  
    this.questionArea  = false
    this.questionName  = ""
    this.correctAnswer  = "A" 
    this.textA  = "" 
    this.textB  = ""
    this.textC  = "" 
    this.textD  = ""  


    


  }

}
