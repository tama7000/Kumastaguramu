# Generated by Django 4.2.1 on 2023-06-21 05:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_comment_subcomment'),
    ]

    operations = [
        migrations.DeleteModel(
            name='SubComment',
        ),
    ]
