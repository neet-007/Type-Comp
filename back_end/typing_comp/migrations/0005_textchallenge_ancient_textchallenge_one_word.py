# Generated by Django 4.2.9 on 2024-01-30 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('typing_comp', '0004_rename_fist_name_userprofile_first_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='textchallenge',
            name='ancient',
            field=models.BooleanField(blank=True, db_index=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='textchallenge',
            name='one_word',
            field=models.BooleanField(blank=True, db_index=True, default=False, null=True),
        ),
    ]
