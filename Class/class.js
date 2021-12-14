
 class student
 {
     createRecord(roll_no,firstname,lastname)
     {
         this.roll_no=roll_no;
         this.firstname=firstname;
         this.lastname=lastname;
         console.log("Record created successfully!");
     }
 
     fetchdetails(department,city)
     {
         this.department=department;
         this.city=city;
         console.log("Fetched data successfully!");
         console.log(this.firstname+" is a "+this.department+" major from "+this.city);
     }
 
     setMarks(m1,m2,m3)
     {
         this.sub1=m1;
         this.sub2=m2;
         this.sub3=m3;
         console.log("Marks assigned successfully!");
     }
 
     getMarks()
     {
         console.log("Roll_no       :  "+this.roll_no);
         console.log("Student name  :  "+this.firstname);
         console.log("Subject 1     :  "+this.sub1);
         console.log("Subject 2     :  "+this.sub2);
         console.log("Subject 3     :  "+this.sub3);
     }
     static printdetails(stud)
     {
         console.log("*******************************************************************************************");
         console.log("The student "+stud.firstname+" "+stud.lastname+" is a "+stud.department+" major from "+stud.city+".");
         console.log("The marks scored are........ ");
         console.log("Subject 1     :  "+stud.sub1);
         console.log("Subject 2     :  "+stud.sub2);
         console.log("Subject 3     :  "+stud.sub3+"  \nWith an average of "+(stud.sub1+stud.sub2+stud.sub3)/3+".");
         console.log("*******************************************************************************************");
 
     }
 }
 
 const student_1=new student();
 student_1.createRecord(100,"Sudha","Selva");
 
 console.log(student_1);
 
 student_1.fetchdetails("CSE","Erode");
 
 student_1.setMarks(876,765,543);
 
 student_1.getMarks();
 
 student.printdetails(student_1);
 