from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from backend.blog.views import frontpage, post_detail, recomend, recomends

urlpatterns = [
    path('', frontpage, name='frontpage'),
    path('recomends/', recomends, name='recomend'),
    path('sobre/', recomend, name='sobre'),
    path('admin/', admin.site.urls),
    path('<slug:slug>/', post_detail, name='post_detail'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)