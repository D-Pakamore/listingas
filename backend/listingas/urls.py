from django.urls import include, path
from rest_framework import routers
from quickstart import views as quickstart_views
from numiscorner import views as numiscorner_views
from user_authentication import urls as auth_urls
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.authtoken import views


router = routers.DefaultRouter()
#user_authentication
# router.register(r'groups', auth_views.GroupViewSet)

router.register(r'information', quickstart_views.InformationBoardViewSet)
router.register(r'numiscorner_coins', numiscorner_views.CoinViewSet)
router.register(r'numiscorner_images', numiscorner_views.ImageViewSet)

urlpatterns = [
    # standart Django urls
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #authentication
    path('user_auth/', include(auth_urls)),
    path('api-token-auth/', views.obtain_auth_token),
    # my urls
    path('create_numiscorner_coin', numiscorner_views.create_coin),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)