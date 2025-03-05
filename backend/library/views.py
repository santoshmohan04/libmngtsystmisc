from rest_framework import viewsets
from .models import Book, Student, CheckedOutBook
from .serializers import BookSerializer, StudentSerializer, CheckedOutBookSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class CheckedOutBookViewSet(viewsets.ModelViewSet):
    queryset = CheckedOutBook.objects.all()
    serializer_class = CheckedOutBookSerializer

