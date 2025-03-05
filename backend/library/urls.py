from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, StudentViewSet, CheckedOutBookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'students', StudentViewSet)
router.register(r'checkedout', CheckedOutBookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
