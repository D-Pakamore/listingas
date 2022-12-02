from django.contrib import admin
from numiscorner.models import Image, Coin

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    readonly_fields = ['date_created', 'date_modified']
    all_fields = [field.name for field in Image._meta.get_fields()][1:]
    list_display = ['coin', 'date_created', 'date_modified']
    fields = all_fields


@admin.register(Coin)
class CoinAdmin(admin.ModelAdmin):
    all_fields = [field.name for field in Coin._meta.get_fields()][2:]
    list_display = ['country', 'denomination', 'year']
    fields = all_fields
