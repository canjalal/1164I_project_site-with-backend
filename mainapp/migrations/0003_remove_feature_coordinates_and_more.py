# Generated by Django 4.1.2 on 2022-10-30 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0002_alter_feature_coordinates'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feature',
            name='coordinates',
        ),
        migrations.RemoveField(
            model_name='feature',
            name='geometry_type',
        ),
        migrations.RemoveField(
            model_name='feature',
            name='location',
        ),
        migrations.AddField(
            model_name='feature',
            name='data',
            field=models.JSONField(default={}),
        ),
        migrations.AddField(
            model_name='feature',
            name='submittals',
            field=models.JSONField(default='none'),
        ),
        migrations.AddField(
            model_name='featurecollection',
            name='data',
            field=models.JSONField(default={}),
        ),
        migrations.AlterField(
            model_name='feature',
            name='pp_history',
            field=models.JSONField(default={}),
        ),
    ]
