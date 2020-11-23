// initialize all required global variables

let totalstudent = 0
let totalstaff = 0
let schoolAccount = 0

//  creating school object
let School = {
    name: " King's College",
    address: " Lagos ",
    student: [],
    staff: [],

    // all required methods for dynamic functionali
    registerStudent: function(studentName, age, gender, sclass, schoolfee){
        this.name = studentName
        this.age = age
        this.gender = gender
        this.sclass = sclass
        this.schoolfee = schoolfee
        
        // create a variable and store an object containting the student information in it.
        name = {name, age, gender, sclass, schoolfee}
        // push the variable to the student array
        School.student.push(name)  
    },

    getAllStudents: function(){
        return School.student
        
    },

    // the methods below itirates over the array and accesses the object properties using an id to carry an operation when a condition is met.

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

    modifyStudent: function(id, key, value){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                School.student[i][key] = value 
            }
        }   return School.student[i]
    },

    deleteStudent: function(id){
        for(let i = 0; i < School.student.length; i++){
            if (id === School.student[i].id){
                delete School.student[i] 
            }
        }   return School.student
    },


    // set up the staff employment pmethod

    employStaff: function(staffName, age, gender, subject, yearsofexperience, qualification, contact, salary){
        totalstaff++
        this.name = staffName
        this.age = age
        this.gender = gender
        this.subject = subject
        this.yearsofexperience = yearsofexperience
        this.qualification = qualification
        this.contact = contact
        this.salary = salary
        
        let id = `kingStaff${totalstaff}`
        
        staffName = {staffName, age, gender, subject, yearsofexperience, qualification, contact, id}
        School.staff.push(staffName)  
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
            }
        }   return School.staff[i]
    },


    deleteStaff: function(id){
        for(let i = 0; i < School.staff.length; i++){
            if (id === School.staff[i].id){
                delete School.staff[i] 
            }
        }   return School.staff
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
        console.log(this.getAllStaffs)
        console.log(this.getAllStudents)
        console.log(this.getSchoolAccount)
    },
}


