# Generated by Django 4.1.3 on 2022-12-05 11:47

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('numiscorner', '0004_coin_mintage'),
    ]

    operations = [
        migrations.AddField(
            model_name='coin',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='coin',
            name='date_modified',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='obverse_image',
            field=models.ImageField(default='../media/default.jpg', upload_to='numiscorner'),
        ),
        migrations.AlterField(
            model_name='image',
            name='obverse_image_url',
            field=models.CharField(default='default', max_length=255),
        ),
        migrations.AlterField(
            model_name='image',
            name='reverse_image',
            field=models.ImageField(default='../media/default.jpg', upload_to='numiscorner'),
        ),
        migrations.AlterField(
            model_name='image',
            name='reverse_image_url',
            field=models.CharField(default='default', max_length=255),
        ),
    ]