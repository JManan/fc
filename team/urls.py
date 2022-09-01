from django.urls import path
from . import views

urlpatterns = [
    path('', views.members, name='members'),
    path('<str:pk>/', views.member, name='member'),
]