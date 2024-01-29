from .models import *
from .serializers import *
from django.utils.decorators import method_decorator
from django.contrib.auth import login, logout, authenticate
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
# Create your views here.

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCsrf(APIView):
    def get(self, request):
        return Response({'success':'csrf token generated'}, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class Register(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            data = request.data

            if data.get('username') and data.get('password') and data.get('re_password'):
                username = data['username']
                password = data['password']
                re_password = data['re_password']

                if password == re_password and len(password) >= 8:
                    if not user_model.objects.filter(username=username).exists():
                        user_model.objects.create_user(username=username, password=password)
                        return Response({'success':f'user {username} was created'}, status=status.HTTP_201_CREATED)

                    return Response({'error':'username is takne'}, status=status.HTTP_400_BAD_REQUEST)

                return Response({'error':'password doesnt equal repassword or they are less than 8 charecters'}, status=status.HTTP_400_BAD_REQUEST)

            return Response({'error':'username or password or repassword not proivded'})

        return Response({'error':'registration is for non authenticated users'}, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class Login(APIView):
    def post(self, request):
        data = request.data

        if data.get('username') and data.get('password'):
            user = authenticate(request, **data)

            if user is not None:
                login(request, user)
                return Response({'success':'login successful'}, status=status.HTTP_200_OK)

            return Response({'error':'no user with provided credintials'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'error':'username or password not provided'}, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class Logout(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            logout(request)
            return Response({'success':'logout successful'}, status=status.HTTP_200_OK)

        return Response({'error':'user is not logged in'}, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class Users(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['user'] = self.request.user

        return context

    @action(methods=['get', 'put', 'patch', 'delete'], detail=False)
    def me(self, request):
        profile = self.get_queryset().filter(user=request.user)[0]
        if request.method == 'GET':
            return Response(self.serializer_class(profile).data, status=status.HTTP_200_OK)

        if request.method == 'PUT':
            pass

        if request.method == 'PATCH':
            pass

        if request.method == 'DELETE':
            pass

@method_decorator(csrf_exempt, name='dispatch')
class TextChallengeView(ModelViewSet):
    queryset = TextChallenge.objects.all()
    serializer_class = TextChallengeSerializer

@method_decorator(csrf_exempt, name='dispatch')
class Raceview(ModelViewSet):
    queryset = Race.objects.all()
    serializer_class = RaceSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['user'] = self.request.user

        return context

