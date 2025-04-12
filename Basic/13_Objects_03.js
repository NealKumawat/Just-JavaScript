// Object De-Structuring

const course= {
    coursename: "js",
    price: 999,
    instructor: "Hitesh"
}

// Now to access the value of just instructor we would use:-
// course.instructor; again and again. So to avoid this we can assign that particular entry to some other variabele

const {instructor: teacher} = course

console.log(teacher);




// whenever u see {djosfjsl} in some constant then it might be destructuring