from .models import *
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_model
        fields = ['id', 'username']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    user_id = serializers.IntegerField(required=False)

    class Meta:
        model = UserProfile
        fields = '__all__'
        extra_kwargs = {'average_speed':{'required':False}, 'top_speed':{'required':False},
                        'average_speed_last_ten':{'required':False}, 'races_won':{'required':False},
                        'first_name':{'required':False}, 'last_name':{'required':False},
                        'nationality':{'required':False}, 'bio':{'required':False},}


    def validate(self, attrs):
        if not attrs.get('user_id'):
            user = self.context.get('user')
            attrs['user'] = user
        else:
            user = user_model.objects.filter(pk=attrs.get('user_id'))
            if not user:
                raise serializers.ValidationError('user not found')

            attrs['user'] = user[0]
        return super().validate(attrs)

    """def create(self, validated_data):
        if not validated_data.get('user'):
            user = self.context.get('user')
            if not user.is_authenticated:
                raise serializers.ValidationError('user is not authrntaiced')
            validated_data['user'] = user

        return super().create(validated_data)
    """

class TextChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextChallenge
        fields = '__all__'
        read_only = ['word_count', 'points']

class RaceSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)
    user_id = serializers.IntegerField(write_only=True, required=False)
    text_challenge = TextChallengeSerializer(required=False, read_only=True)
    text_challenge_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Race
        fields = '__all__'

    def validate(self, attrs):
        if attrs.get('user_id'):
            user = user_model.objects.filter(pk=attrs['user_id'])[0]
            if not user:
                raise serializers.ValidationError('user not found')
            attrs['user'] = user
        else:
            attrs['user'] = self.context.get('user')
        if attrs.get('text_challenge_id'):
            text_challenge = TextChallenge.objects.filter(pk=attrs['text_challenge_id'])[0]
            if not text_challenge:
                raise serializers.ValidationError('text challenge not found')
            attrs['text_challenge'] = text_challenge
        return super().validate(attrs)