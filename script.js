let students = [
    {
        rlno: "23J41A3301",
        stname: "AAKASH MATTA",
        m1: 20, m2: 18, m3: 19, m4: 19, m5: 20,
        s1: 18, s2: 16, s3: 23, s4: 21, s5: 28,
        i1: 20, i2: 22, i3: 30,
        e1: 32, e2: 36, e3: 45,
        c1: 0, c2: 0, c3: 0, c4: 0, c5: 0,c6: 0,c7: 0,c8: 0
    }
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

        // Find student data
        let student = students.find(s => s.rlno === htno);

        if (student) {
            document.querySelector(".name").innerHTML = student.stname;

            // Dynamically fill all subjects
            let fields = ["m1", "m2", "m3", "m4", "m5", "s1", "s2", "s3", "s4", "s5", "i1", "i2", "i3", "e1", "e2", "e3", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];
            fields.forEach(field => {
                let el = document.querySelector("." + field);
                if (el) el.innerHTML = student[field];
            });

            // Corrected total fields
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

            





            for (let key in totalFields) {
                let el = document.querySelector("." + key);
                if (el) el.innerHTML = totalFields[key];
            }

            document.getElementsByClassName("percentage")[0].innerHTML = ((totalFields.mtotal_stotal / 800) * 100).toFixed(2) + "%";
            document.getElementsByClassName("sgpa")[0].innerHTML = ((totalFields.mtotal_stotal / 800) * 10).toFixed(2);
            document.getElementsByClassName("ctotal")[0].innerHTML = student.c1 + student.c2 + student.c3 + student.c4 + student.c5 + student.c6 + student.c7 + student.c8;
            document.getElementsByClassName("marks-obt")[0].innerHTML = totalFields.mtotal_stotal +"/800";
            document.getElementsByClassName("cgpa")[0].innerHTML = ((totalFields.mtotal_stotal / 800) * 10).toFixed(2);
            


        } else {
            alert("Student data not found!");
        }
    } else {
        document.querySelector(".result-page").style.display = "none";
        document.getElementById("error-message").style.display = "block";
    }
}
