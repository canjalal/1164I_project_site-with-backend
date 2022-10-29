from django.contrib import admin

# Register your models here.

from .models import FeatureCollection, Feature

admin.site.register(Feature)
admin.site.register(FeatureCollection)