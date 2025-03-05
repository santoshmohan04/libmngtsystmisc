import os
import platform

# Global list to store book information
libraryBooks = [
    {"id": 1, "title": "To Kill a Mockingbird", "author": "Harper Lee", "year": "1960", "status": "available"},
    {"id": 2, "title": "1984", "author": "George Orwell", "year": "1949", "status": "available"},
    {"id": 3, "title": "Pride and Prejudice", "author": "Jane Austen", "year": "1813", "status": "available"},
    {"id": 4, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": "1925", "status": "available"},
    {"id": 5, "title": "Moby Dick", "author": "Herman Melville", "year": "1851", "status": "available"},
    {"id": 6, "title": "War and Peace", "author": "Leo Tolstoy", "year": "1869", "status": "available"},
    {"id": 7, "title": "The Catcher in the Rye", "author": "J.D. Salinger", "year": "1951", "status": "available"},
    {"id": 8, "title": "The Hobbit", "author": "J.R.R. Tolkien", "year": "1937", "status": "available"},
    {"id": 9, "title": "Ulysses", "author": "James Joyce", "year": "1922", "status": "available"},
    {"id": 10, "title": "The Odyssey", "author": "Homer", "year": "8th Century BC", "status": "available"}
]

# Global list to store student information
listStd = ["John Smith", "Jane Johnson", "Jay Bhogal", "Mike Wong","Ali Dembele", "Meryam Usman"]

# Global list to store checked out books
checkedOutBooks = []

# Function to display the menu for library management
def manageLibrary():
    print("""
    ------------------------------------------------------
   |======================================================| 
   |======= Welcome To Birmingham Hub Library Management System =======|
   |======================================================|
    ------------------------------------------------------

Enter 1 : To Manage Students 
Enter 2 : To Manage Books 
Enter 3 : To Check Out Book
Enter 4 : To Return Book
Enter 5 : To Exit
    """)

    try:
        userInput = int(input("Please select an option: "))
    except ValueError:
        print("\nError: That's Not A Number")
        manageLibrary()
        return

    if userInput == 1:
        manageStudents()
    elif userInput == 2:
        manageBooks()
    elif userInput == 3:
        checkOutBook()
    elif userInput == 4:
        returnBook()
    elif userInput == 5:
        quit()
    else:
        print("Invalid option. Please select a valid option.")
        manageLibrary()

# Function to manage student-related operations
def manageStudents():
    print("""
    ------------------------------------------------------
   |================= Student Management ================|
    ------------------------------------------------------

Enter 1 : To View Student's List 
Enter 2 : To Add New Student 
Enter 3 : To Search Student 
Enter 4 : To Remove Student 
Enter 5 : To Go Back
    """)

    try:
        userInput = int(input("Please select an option: "))
    except ValueError:
        print("\nError: That's Not A Number")
        manageStudents()
        return

    if userInput == 1:
        print("List Students\n")
        for student in listStd:
            print(f"=> {student}")
    elif userInput == 2:
        newStd = input("Enter New Student: ")
        if newStd in listStd:
            print(f"\nThis Student {newStd} Already In The Database")
        else:
            listStd.append(newStd)
            print(f"\n=> New Student {newStd} Successfully Added")
    elif userInput == 3:
        srcStd = input("Enter Student Name To Search: ")
        if srcStd in listStd:
            print(f"\n=> Record Found Of Student {srcStd}")
        else:
            print(f"\n=> No Record Found Of Student {srcStd}")
    elif userInput == 4:
        rmStd = input("Enter Student Name To Remove: ")
        if rmStd in listStd:
            listStd.remove(rmStd)
            print(f"\n=> Student {rmStd} Successfully Deleted")
        else:
            print(f"\n=> No Record Found of This Student {rmStd}")
    elif userInput == 5:
        manageLibrary()
    else:
        print("Invalid option. Please select a valid option.")
        manageStudents()

# Function to manage book-related operations
def manageBooks():
    print("""
    ------------------------------------------------------
   |================= Book Management ==================|
    ------------------------------------------------------

Enter 1 : To View Library Books 
Enter 2 : To Add New Book 
Enter 3 : To Search Book 
Enter 4 : To Remove Book 
Enter 5 : To Go Back
    """)

    try:
        userInput = int(input("Please select an option: "))
    except ValueError:
        print("\nError: That's Not A Number")
        manageBooks()
        return

    if userInput == 1:
        print("Library Books List\n")
        for book in libraryBooks:
            print(f"ID: {book['id']}, Title: {book['title']}, Author: {book['author']}, Year: {book['year']}, Status: {book['status']}")
    elif userInput == 2:
        newId = int(input("Enter Book ID: "))
        newTitle = input("Enter Book Title: ")
        newAuthor = input("Enter Book Author: ")
        newYear = input("Enter Publication Year: ")
        newBook = {"id": newId, "title": newTitle, "author": newAuthor, "year": newYear, "status": "available"}

        if any(book['id'] == newId for book in libraryBooks):
            print(f"\nThis Book with ID {newId} Already In The Database")
        else:
            libraryBooks.append(newBook)
            print(f"\n=> New Book {newTitle} Successfully Added")
    elif userInput == 3:
        searchTitle = input("Enter Book Title To Search: ")
        found = False
        for book in libraryBooks:
            if searchTitle.lower() in book["title"].lower():
                print(f"\n=> Record Found: ID: {book['id']}, Title: {book['title']}, Author: {book['author']}, Year: {book['year']}, Status: {book['status']}")
                found = True
        if not found:
            print(f"\n=> No Record Found For Book: {searchTitle}")
    elif userInput == 4:
        removeId = int(input("Enter Book ID To Remove: "))
        bookFound = False
        for book in libraryBooks:
            if book["id"] == removeId:
                libraryBooks.remove(book)
                print(f"\n=> Book ID {removeId} Successfully Deleted")
                bookFound = True
                break
        if not bookFound:
            print(f"\n=> No Record Found For Book ID: {removeId}")
    elif userInput == 5:
        manageLibrary()
    else:
        print("Invalid option. Please select a valid option.")
        manageBooks()

# Function to handle checking out a book
def checkOutBook():
    print("Check Out Book\n")
    book_id = int(input("Enter Book ID to Check Out: "))
    member_id = input("Enter Your ID (e.g., Student Name): ")
    
    for book in libraryBooks:
        if book["id"] == book_id:
            if book["status"] == "available":
                book["status"] = "checked out"
                checkedOutBooks.append({"id": book_id, "member": member_id})
                print(f"\n=> Book ID {book_id} Checked Out Successfully")
            else:
                print(f"\n=> Book ID {book_id} is already checked out")
            return
    print(f"\n=> No Book Found with ID: {book_id}")

# Function to handle returning a book
def returnBook():
    print("Return Book\n")
    book_id = int(input("Enter Book ID to Return: "))
    member_id = input("Enter Your ID (e.g., Student Name): ")

    for record in checkedOutBooks:
        if record["id"] == book_id and record["member"] == member_id:
            for book in libraryBooks:
                if book["id"] == book_id:
                    book["status"] = "available"
                    checkedOutBooks.remove(record)
                    print(f"\n=> Book ID {book_id} Returned Successfully")
                    return
    print(f"\n=> No Record Found for Book ID {book_id} Checked Out by {member_id}")

# Initial function call to start the program
manageLibrary()
