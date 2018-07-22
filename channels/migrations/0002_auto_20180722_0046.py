# Generated by Django 2.0.7 on 2018-07-22 00:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='channel',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='channel',
            name='modified',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
