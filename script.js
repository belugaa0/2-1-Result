let students = [
    {
        rlno: "23J41A3301",
        stname: "AAKASH MATTA",
        m1: 17, m2: 19, m3: 17, m4: 16, m5: 20,
        s1: 18, s2: 12, s3: 23, s4: 21, s5: 28,
        i1: 20, i2: 22, i3: 38,
        e1: 32, e2: 36, e3: 58,
        c1: 0, c2: 0, c3: 0, c4: 0, c5: 3,c6: 2,c7: 2,c8: 1,
        stat1: "", stat2: "", stat3: "", stat4: "", stat5: "", stat6: "", stat7: "", stat8: "",
        grad1: "", grad2: "", grad3: "", grad4: "", grad5: "", grad6: "", grad7: "", grad8: ""
    },

    {
        rlno: "23J41A3302",
        stname: "AARE ADITYA",
        m1: 26, m2: 30, m3: 28, m4: 27, m5: 34,
        s1: 40, s2: 18, s3: 35, s4: 39, s5: 46,
        i1: 26, i2: 30, i3: 38,
        e1: 48, e2: 52, e3: 59,
        c1: 4, c2: 0, c3: 3, c4: 3, c5: 3,c6: 2,c7: 2,c8: 1,
        stat1: "", stat2: "", stat3: "", stat4: "", stat5: "", stat6: "", stat7: "", stat8: "",
        grad1: "", grad2: "", grad3: "", grad4: "", grad5: "", grad6: "", grad7: "", grad8: ""
    },

    {
        rlno: "23J41A3303",
        stname: "ADAPA MADHU PRIYA",
        m1: 36, m2: 37, m3: 39, m4: 39, m5: 40,
        s1: 53, s2: 24, s3: 56, s4: 54, s5: 56,
        i1: 38, i2: 38, i3: 40,
        e1: 56, e2: 58, e3: 60,
        c1: 4, c2: 0, c3: 3, c4: 3, c5: 3,c6: 2,c7: 2,c8: 1,
        stat1: "", stat2: "", stat3: "", stat4: "", stat5: "", stat6: "", stat7: "", stat8: "",
        grad1: "", grad2: "", grad3: "", grad4: "", grad5: "", grad6: "", grad7: "", grad8: ""
    },

    {
        rlno: "23J41A3304",
        stname: "ALETI ANANYA",
        m1: 33, m2: 32, m3: 32, m4: 36, m5: 38,
        s1: 54, s2: 21, s3: 51, s4: 49, s5: 56,
        i1: 36, i2: 36, i3: 38,
        e1: 55, e2: 56, e3: 59,
        c1: 4, c2: 0, c3: 3, c4: 3, c5: 3,c6: 2,c7: 2,c8: 1,
        stat1: "", stat2: "", stat3: "", stat4: "", stat5: "", stat6: "", stat7: "", stat8: "",
        grad1: "", grad2: "", grad3: "", grad4: "", grad5: "", grad6: "", grad7: "", grad8: ""
    },

    {
        rlno: "23J41A3305",
        stname: "ANDRA SATYA KISHORE",
        m1: 17, m2: 22, m3: 17, m4: 16, m5: 29,
        s1: 18, s2: 18, s3: 29, s4: 28, s5: 28,
        i1: 26, i2: 28, i3: 38,
        e1: 40, e2: 42, e3: 50,
        c1: 0, c2: 0, c3: 3, c4: 3, c5: 3,c6: 2,c7: 2,c8: 1,
        stat1: "", stat2: "", stat3: "", stat4: "", stat5: "", stat6: "", stat7: "", stat8: "",
        grad1: "", grad2: "", grad3: "", grad4: "", grad5: "", grad6: "", grad7: "", grad8: ""
    },

    

    



   
];

function validatehtno() {
    let htno = document.getElementById("htno").value.trim().toUpperCase(); 
    let validHTNOs = new Set();

    // Generate valid roll numbers
    for (let i = 3301; i <= 3364; i++) {
        validHTNOs.add(`23J41A${i}`);
    }
    for (let i = 3301; i <= 3307; i++) {
        validHTNOs.add(`24J45A${i}`);
    }

    if (validHTNOs.has(htno)) {
        document.querySelector(".result-page").style.display = "block";
        document.getElementById("error-message").style.display = "none";
        document.querySelector(".no").innerHTML = htno;

    
        let student = students.find(s => s.rlno === htno);

        if (student) {
            document.querySelector(".name").innerHTML = student.stname;

            
            let fields = ["m1", "m2", "m3", "m4", "m5", "s1", "s2", "s3", "s4", "s5", "i1", "i2", "i3", "e1", "e2", "e3", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];
            fields.forEach(field => {
                let el = document.querySelector("." + field);
                if (el) el.innerHTML = student[field];
            });

            


            let totalFields = {
                "m1_s1": student.m1 + student.s1,
                "m2_s2": student.m2 + student.s2,
                "m3_s3": student.m3 + student.s3,
                "m4_s4": student.m4 + student.s4,
                "m5_s5": student.m5 + student.s5,
                "i1_e1": student.i1 + student.e1,
                "i2_e2": student.i2 + student.e2,
                "i3_e3": student.i3 + student.e3,
                "mtotal": student.m1 + student.m2 + student.m3 + student.m4 + student.m5 + student.i1 + student.i2 + student.i3,
                "stotal": student.s1 + student.s2 + student.s3 + student.s4 + student.s5 + student.e1 + student.e2 + student.e3,
                "mtotal_stotal": student.m1 + student.m2 + student.m3 + student.m4 + student.m5 + student.s1 + student.s2 + student.s3 + student.s4 + student.s5 + student.i1 + student.i2 + student.i3 + student.e1 + student.e2 + student.e3
            };

            

            let statusFields = {
                "s1": "stat1", "s2": "stat2", "s3": "stat3", "s4": "stat4", "s5": "stat5",
                "e1": "stat6", "e2": "stat7", "e3": "stat8"
            };

            let failedSubjects = 0; 

            for (let field in statusFields) {
                let statusEl = document.querySelector("." + statusFields[field]);

                if (student[field] <= 25 || totalFields[field.replace("s", "m") + "_" + field] < 40) {
                    statusEl.innerHTML = "Fail";
                    statusEl.style.backgroundColor = "#d64b4b";
                    failedSubjects++;
                } else {
                    statusEl.innerHTML = "Pass";
                }
            }

            document.querySelector(".sub-due").innerHTML = `${failedSubjects}/8`; 


            function getGrade(score) {
                if (score >= 90) return "O";
                else if (score >= 80) return "A+";
                else if (score >= 70) return "A";
                else if (score >= 60) return "B+";
                else if (score >= 50) return "B";
                else if (score >= 40) return "C";
                else return "F"; 
            }

            let gradeFields = {
                "m1_s1": "grad1", "m2_s2": "grad2", "m3_s3": "grad3", "m4_s4": "grad4", "m5_s5": "grad5",
                "i1_e1": "grad6", "i2_e2": "grad7", "i3_e3": "grad8"
            };
            
            for (let field in gradeFields) {
                let gradeEl = document.querySelector("." + gradeFields[field]);
                if (gradeEl) gradeEl.innerHTML = getGrade(totalFields[field]);
            }
            
            




            for (let key in totalFields) {
                let el = document.querySelector("." + key);
                if (el) el.innerHTML = totalFields[key];
            }

            document.getElementsByClassName("percentage")[0].innerHTML = ((totalFields.mtotal_stotal / 800) * 100).toFixed(2) + "%";
            document.getElementsByClassName("sgpa")[0].innerHTML = ((totalFields.mtotal_stotal / 800) * 10).toFixed(2);
            document.getElementsByClassName("ctotal")[0].innerHTML = student.c1 + student.c2 + student.c3 + student.c4 + student.c5 + student.c6 + student.c7 + student.c8;
            document.getElementsByClassName("marks-obt")[0].innerHTML = totalFields.mtotal_stotal +"/800";
            document.getElementsByClassName("cgpa")[0].innerHTML = ((totalFields.mtotal_stotal / 800) * 10).toFixed(2);
            document.getElementsByClassName("cred-obt")[0].innerHTML = student.c1 + student.c2 + student.c3 + student.c4 + student.c5 + student.c6 + student.c7 + student.c8 + "/21";


            


        } else {
            alert("Student data not found!");
        }
    } else {
        document.querySelector(".result-page").style.display = "none";
        document.getElementById("error-message").style.display = "block";
    }
}
