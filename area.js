var choice = prompt("Welcome to Area Calculator! \n Please enter a number in the following options. \n\n 1. Area of a rectangle \n 2. Area of a triangle \n 3. Area of a circle \n 4. Area of a parallelogram ");

if (choice == null) {
    alert("Please enter a digit.")
}

if (choice == '1') {
    var l = prompt("Enter the length: ")
    var b = prompt("Enter the breadth: ")

    var result = Number(l) * Number(b) 
    alert("The area of this shape is " + result + " sq. units.")
}

if (choice == '2') {
    var base = prompt("Enter the base: ")
    var h = prompt("Enter the height: ")

    var result = 1/2 * Number(base) * Number(h) 
    alert("The area of this shape is " + result + " sq.units.")
}

if (choice == '3') {
    var dia = prompt("Enter the diameter: ")
 
    var result = 3.14 * Number(dia) 
    alert("The area of this shape is " + result + " sq.units. ")
}

if (choice == '4') {
    var esab = prompt("Enter the base: ")
    var height = prompt("Enter the height: ")
 
    var result = Number(esab) * Number(height)
    alert("The area of this shape is " + result + " sq.units. ")
}
