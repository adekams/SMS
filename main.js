
// initialize all required global variables
let totalstudent = 0
let totalstaff = 0
let schoolAccount = 0

//  creating school object
let School = {
    name: "King's College",
    address: " Lagos ",
    student: [],
    staff: [],

    // all required methods for dynamic functionali
    registerStudent: function(name, age, gender, sclass, schoolfee){
        totalstudent++

        let id = `KingsStudent${totalstudent}`
        // create a variable and store an object containting the student information in it.
        name = {name, age, gender, sclass, schoolfee, id}
        // push the variable to the student array
        School.student.push(name)  
    },
    
     getAllStudents: function(){
        return School.student
    },

    getStudentbyID: function(id){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                return School.student[i]
            }
        }   
    },

    
    getStudentbyName: function(name){
        for(let i = 0; i < School.student.length; i++){
            if (name === School.student[i].name){
                return School.student[i]
            }
        }
    },


    // sortStudents: function(arg){
    //     School.student.sort(function(arg){
    //         if (arg ===  School.student[i].arg){
    //             return School.student[i]
    //         }
    //     })
    // },
    

    modifyStudent: function(id, key, value){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                School.student[i][key] = value
                return School.student[i] 
            }  
        }  
    },
    
    deleteStudent: function(id){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                delete School.student[i]
                return School.student 
            }
        }  
    },


    // ---------------------------------------------------------------------------------------------------------

    // set up the staff employment pmethod
    employStaff: function(name, age, gender, subject, yearsofexperience, qualification, contact, salary){
        totalstaff++
        let id = `kingStaff${totalstaff}`
        name = {name, age, gender, subject, yearsofexperience, qualification, contact, salary, id}
        School.staff.push(name)  
    },


    getAllStaffs: function(){
        return School.staff
    },

    // the methods below itirates over the array and accesses the object properties using an id to carry an operation when a condition is met.

    getStaffbyId: function(id){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                return School.staff[i]
            }
        }
    },

    
    getStaffbyName: function(name){
        for(let i = 0; i < School.staff.length; i++){
            if (name === School.staff[i].name){
                return School.staff[i]
            }
        }
    },

    
    modifyStaff: function(id, key, value){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                School.staff[i][key] = value
                return School.staff[i] 
            }
        }   
    },


    deleteStaff: function(id){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                delete School.staff[i]
                return School.staff 
            }
        }   
    },

    // This method gets school accounts by adding all the school fees, and all staff salaries separately. then subtracting both from each other.

    // getSchoolAccount: function(){
    //     for (let i = 0; i < School.student.lenght; i++){
    //         let studentsFeesRevenue =+ parseInt(School.student[i].schoolfee)    
    //         let staffSalaryCost =+ parseInt(School.staff[i].salary)
    //         schoolAccount = studentsFeesRevenue - staffSalaryCost    
    //     }   return schoolAccount
    // },  


    // this method gets all necessaryinformation about the school
    getSchoolInfo: function(){
        return {"name": this.name, "address": this.address, "students": this.getAllStudents(), "staff": this.getAllStaffs(), "account": this.getSchoolAccount()}
    },
}


// ---------------------------------------------------------------------------------------------------------


School.registerStudent('Mike', 15, 'male', 'JS 1', '#30500', 'blue')
School.registerStudent('Usman', 18, 'male', 'SS 1', '#22000', 'yellow')
School.registerStudent('morenike', 17, 'female', 'JS 2', '#50000', 'green')
School.registerStudent('Anna', 17, 'female', 'JS 2', '#50000', 'blue')
School.registerStudent('Uche', 20, 'male', 'SS 2', '#50000', 'red')
School.registerStudent('Nike', 17, 'female', 'JS 2', '#50000', 'yellow')
School.registerStudent('ike', 13, 'male', 'JS 3', '#40000', 'red')


School.employStaff('Mike', 20, 'male', 'maths', '4', 'Bsc', '0837455929', "50000")
School.employStaff('John', 35, 'male', 'science', '5', 'Bsc', '0837455929', '50000' )
School.employStaff('Bilikisu', 26, 'female', 'PHE', '6', 'Bsc', '0837455929', '50000' )
School.employStaff('Ciara', 32, 'female', 'Biology', '5', 'Bsc', '0837455929', '50000' )
School.employStaff('Diana', 28, 'female', 'History', '4', 'Bsc', '0837455929', '50000' )
School.employStaff('Elisha', 23, 'male', 'Agric', '2', 'Bsc', '0837455929', '50000' )
School.employStaff('Farouk', 20, 'male', 'Psychology', '1', 'Bsc', '0837455929', '50000' )
School.employStaff('Glory', 25, 'female', 'maths', '4', 'Bsc', '0837455929', '50000' )



console.log(School.getStudentbyID())
console.log(School.getStudentbyName())
console.log(School.getStudentbyName(name))
console.log(School.deleteStudent(id))
console.log(School.modifyStudent('KingStudent4', 'age', 20))


console.log(School.getStaffbyID())
console.log(School.getAllStaff())
console.log(School.getStaffbyName(name))
console.log(School.deleteStaff(id))
console.log(School.modifyStaff('KingStudent4', 'age', 20))
