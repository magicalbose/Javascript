var choice = prompt("Welcome to Perimeter Calculator! \n Please enter a number in the following options. \n\n 1. Perimeter of a square \n 2. Perimeter of a rectangle \n 3. Perimeter of a circle ");

if (choice == null) {
    alert("Please enter a number from the options.")
}

if (choice == '1') {
    var len = prompt("Enter the side length of the square of your choice: ")

    var result = 4 * Number(len)
    alert("The perimeter of this square is " + result + " units.")
}

if (choice == '2') {
    var lent = prompt("Enter the length of the rectangle of your choice: ")
    var wid = prompt("Enter the width of the rectangle of your choice: ")

    var result = 2 * (Number(lent) + Number(wid))
    alert("The perimeter of this rectangle is " + result + " units.")
}

if (choice == '3') {
    var rad = prompt("Enter the radius of the circle of your choice: ")

    var result = 2 * 3.14 * Number(rad)
    alert("The perimeter/circumference of this circle is " + result + " units.")
}