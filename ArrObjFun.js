var students = ["Shivam", "Sona", "Shubhangi", "Devu", "Amayra"]
console.log(students)
console.log(students.length)
students[1] = "Triveni"
console.log(students);
students[2] = "Sona"
console.log(students)
console.log(students[students.length - 1])
console.log(students[students.length - 2])
students.push('Shubham')
console.log(students)
students.push('Saurabh')
console.log(students)
students[8] = 'Nihar'
console.log(students)
students.push(100)
students.push(true) /*add ele to the last */
console.log(students)
students.pop() /*remove the ele to the last */
console.log(students)
console.log(students)
console.log(students.pop(2))
console.log(students.join('+'))
console.log(students.toString())
console.log(students)
delete students[students.length - 1]
console.log(students)
delete students[0]
console.log(students)
students.unshift('Samar') /*add ele to start */
console.log(students)
students.shift() /* remove ele from start */
console.log(students)
console.log(students.splice(2, 2, "shiv", "Shambhu")) /*replce ele with no 2*/
console.log(students)
console.log(students.splice(1, 2)) /*remove the of no 1 and 2 in list */
console.log(students)
console.log(students.slice(2))
console.log(students)
console.log(students.slice(1))
console.log(students)
console.log(students.slice(1))
console.log(students.slice(2)) /* remove element form list but count with deleted element */
console.log(students.slice(3, 4)) /* 1 index inclusive 2 is exclusive */
var students1 = ["A", "B", "C", "D"]
console.log(students1)
console.log(students1.slice(1))
console.log(students1.slice(2, 3))
console.log(students1)
console.log(students1.slice(1, 3)) /*remove 1 ele and count upto 3 */
var arr = ["a", "b", "c", "d", "e", "f"]
console.log(arr.splice(4, 2, "x", "y")) /* after d 2 ele replace with x,y [a, b, c, d, x, y]*/
console.log(arr)