from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('auth/users', views.Users)
router.register('text-challenge', views.TextChallengeView)
router.register('race', views.Raceview)

urlpatterns = [
    path('auth/register', views.Register.as_view(), name='register'),
    path('auth/login', views.Login.as_view(), name='login'),
    path('auth/logout', views.Logout.as_view(), name='logout'),
    path('auth/get-csrf', views.GetCsrf.as_view(), name='get-csrf'),
    path('', include(router.urls)),
]