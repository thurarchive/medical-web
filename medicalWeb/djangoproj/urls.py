from django.contrib import admin
from django.urls import path, re_path
from . import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r"",views.index,name="index"),  # Add the new URL pattern for the root URL
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
