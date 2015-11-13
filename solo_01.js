var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

function Employee(name, empNum, salary, rating) {

	this.name = name;
	this.empNum = empNum;
	this.salary = parseInt(salary);
	this.rating = rating;
}

var atticus = new Employee("atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];


function sti(employees) {
	for (var i = 0; i <= employees.length; i ++){
		var bonus = 0;
		if(employees.rating <= 2){
			bonus = 0;
		}else if(employees.rating === 3){
			bonus = (employees.salary * .04);
		}else if(employees.rating === 4){
        	bonus = (employees.salary * .06);
		}else if(employees.rating === 5){
			bonus = (employees.salary * .1);
		}
		if(employees.empNum.length === 4){
			bonus += .05;
		}
		if(employees.salary > 65000){
			bonus = .01;
		}if(employees.bonus > .13){
			bonus = .13;
		}

	};
}; 
	
