from django.urls import path
from . import views
urlpatterns = [
    path('', views.home),
    path('get_nse_stock/',views.get_nse_stock,name='api-get_nse_stock')
]
