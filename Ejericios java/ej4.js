//Ejercicio 4 //

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const findCommonCourse = (student1, student2) => {
    const commonCourses = student1.filter(courses => student2.includes(courses))
    if (commonCourses.length > 0) { `Common Courses: ${commonCourses.join(",")}`
       
    }else{ `No common courses found.`
       
    }
}

console.log (findCommonCourse);
