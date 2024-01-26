from collections.abc import Iterable
from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
user_model = get_user_model()

# make a group class

class UserProfile(models.Model):
    user = models.ForeignKey(user_model, on_delete=models.CASCADE)
    average_speed = models.DecimalField(default=0, blank=True, db_index=True, decimal_places=2, max_digits=4)
    top_speed = models.DecimalField(default=0, blank=True, decimal_places=2, max_digits=4)
    average_speed_last_ten = models.DecimalField(default=0, blank=True, decimal_places=2, max_digits=4)
    races_won = models.PositiveBigIntegerField(default=0, blank=True, db_index=True)

    def __str__(self) -> str:
         return f'{self.user.username}'

class Choices(models.IntegerChoices):
        EASY = 0, 'Easy'
        MEDIUM = 1, 'Medium'
        HARD = 2, 'Hard'

class TextChallenge(models.Model):
    difficulty = models.IntegerField(default=Choices.EASY, choices=Choices.choices)
    text = models.TextField()
    word_count = models.PositiveIntegerField(default=0, db_index=True, blank=True)
    points = models.PositiveIntegerField(default=0, db_index=True, blank=True)

    def save(self, *args, **kwargs):
        self.word_count = len(self.text.split())
        if self.difficulty == 0:
             divider = 4
        elif self.difficulty == 1:
             divider = 3
        else:
            divider = 2

        self.points = round(self.word_count / divider)
        return super(TextChallenge, self).save(*args, **kwargs)


    def __str__(self) -> str:
         return f'diffeculty:{self.difficulty} word count:{self.word_count} points:{self.points}'

class Race(models.Model):
    user = models.ForeignKey(user_model, on_delete=models.CASCADE)
    text_challenge = models.ForeignKey(TextChallenge, on_delete=models.CASCADE)
    average_speed = models.DecimalField(default=0, db_index=True, decimal_places=2, max_digits=4)
    won = models.BooleanField(default=False)

    def __str__(self) -> str:
         return f'{self.user.username} text challenge:{self.text_challenge.pk}'