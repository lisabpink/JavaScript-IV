// CODE here for your Lambda Classes
 

class Person{
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location =personAttr.location;
    
    }
    speak(){
        console.log (`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorAttr){
        super(instructorAttr)
        this.specialty = instructorAttr.specialty;
        this.favLang = instructorAttr.favLang;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    demo(subject){
        console.log (`${this.name} is teaching ${subject} today. She wants you to remember shes ${this.catchPhrase}`)
    }

    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    listsSubjects(){
        for (let i = 0; i< this.favSubjects.length; i++){
            console.log (this.favSubjects[i]);
        }

    }

    PRAssignment(student, subject){
        console.log (`${student.name} has submitted a PR for ${subject}`);

    }
    sprintChallenge(student, subject){
        console.log (`${student.name} has begun sprint challenge on ${subject}`);
    }

}

class ProjectManager extends Instructor{
    consturctor(projectManagerAttr){
        extend (projectManagerAttr);
        this.gradClassName =projectManagerAttr.gradClassName;
        this.favInstructor = projectManagerAttr.favInstructor;
    }

    standUp(name, channel){
        console.log (`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(name, student, subject){
        console.log (`${name.name} debugs ${student.name}'s code in ${subject}`);
    }

}




const Gamora = new Instructor({
	name: 'Gamora',
	location: 'Marvel Universe',
	age: 30,
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: `the deadliest woman in the whole galaxy.`
});


Lisa = new Student({
	name: 'Lisa',
	location: 'Florida',
	age: 22,
	previousBackground: `Yoga Instructor`,
	className: `Web25`,
	favSubjects: [ `HTML`, ` LESS`, ` ES6` ]
});


const Groot = new ProjectManager({
	name: `Groot`,
	location: 'Hyperspace',
	age: 450,
	gradClassName: `Web25`,
	favInstructor: `Britt`,
	favLanguage: 'not ES5',
	specialty: 'design',
	catchPhrase: `I am Groot`
});


Groot.speak();
Gamora.speak();
Lisa.speak();
Gamora.demo(`ES6`);
Gamora.grade(Lisa,`JS YAY!`);
Lisa.listsSubjects();
Lisa.PRAssignment(Lisa,`Javascript`);
Lisa.sprintChallenge(Lisa,`JavaScript Fundamentals`);
Groot.standUp(Groot,`Webpt6`);
Groot.debugsCode(Groot,Lisa,`awful ES5`);




