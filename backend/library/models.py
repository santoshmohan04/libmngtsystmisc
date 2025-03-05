from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    year = models.CharField(max_length=20)
    status = models.CharField(max_length=20, default="available")

class Student(models.Model):
    name = models.CharField(max_length=255)

class CheckedOutBook(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    checkout_date = models.DateTimeField(auto_now_add=True)