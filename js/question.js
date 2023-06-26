
let questionnaire = [
    {   
            "id":1,
            "question":" la racine carrée de -1 est :",
            "choix1":0,
            "choix2":-1,
            "choix3": "néxiste pas",
            "good_answer":-1
        }, 
        {
            "id":2,
            "question":" la valeur absolu de (x-1):",
            "choix1":"x-1",
            "choix2":-4,
            "choix3": "-(x-1)",
            "good_answer":4
        }, 
        {
            "id":3,
            "question":" la  double de 4 est :",
            "choix1":4,
            "choix2":16,
            "choix3":8,
            "good_answer":16
        } ,
        {
            "id":4,
            "question":" la  double de 4 est :",
            "choix1":"4",
            "choix2":16,
            "choix3":8,
            "good_answer":16
        } 
    ]
// Récupération les questions depuis le fichier JSON



let question = document.querySelector(".question");
let choix1 = document.querySelector('.scale1');
let choix2 = document.querySelector('.scale2');
let choix3 = document.querySelector('.scale3');
console.log(questionnaire[0]);

question.textContent= questionnaire[0].question;
choix1.textContent=questionnaire[0].choix1;
choix2.textContent=questionnaire[0].choix2;
choix3.textContent=questionnaire[0].choix3;
 
let c = document.querySelector('.btn');
let index = 0;


    c.addEventListener('click', function(){  
      
        console.log(question.textContent= questionnaire[index].question);
        choix1.textContent=questionnaire[index].choix1;
        choix2.textContent=questionnaire[index].choix2;
        choix3.textContent=questionnaire[index].choix3;
            index ++;
     
      
    });
 







    



