# Generated by Django 4.1.3 on 2022-12-19 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('numiscorner', '0010_alter_coin_certification_alter_coin_coin_condition_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='obverse_image',
            field=models.ImageField(default='../media/numiscorner/default.jpg', upload_to='numiscorner'),
        ),
        migrations.AlterField(
            model_name='image',
            name='reverse_image',
            field=models.ImageField(default='../media/numiscorner/default.jpg', upload_to='numiscorner'),
        ),
    ]