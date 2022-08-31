from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from .settings import DEBUG, BASE_DIR
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
]

if DEBUG: 
    STATICFILES_DIRS = [os.path.join(BASE_DIR, 'FCWebsite-master/build/static')]

else:
    STATIC_ROOT = os.path.join(BASE_DIR, 'FCWebsite-master/build/static')