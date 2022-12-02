from django.contrib import admin
from quickstart.models import InformationBoard

class InformationBoardAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['message']}),
        ('User information', {'fields': ['user']}),
    ]
    list_display = ('user', 'message')


admin.site.register(InformationBoard, InformationBoardAdmin)
