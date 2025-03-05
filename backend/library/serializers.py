from rest_framework import serializers
from .models import Book, Student, CheckedOutBook

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class CheckedOutBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckedOutBook
        fields = '__all__'