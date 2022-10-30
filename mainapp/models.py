from django.db import models
from django.contrib.postgres.fields import JSONField
from django_jsonform.models.fields import ArrayField
# Create your models here.

class FeatureCollection(models.Model):
    name = models.CharField(max_length=255,null=False,blank=False)
    # crs = models.JSONField(null=False)
    data = models.JSONField(default=dict({}), null=False)

    def __str__(self):
        return self.name

class Feature(models.Model):
    data = models.JSONField(default=dict({}), null=False)

    # the properties are from the property key, not the top level
    feature_collection = models.ForeignKey(FeatureCollection,
                                    on_delete=models.CASCADE)
    # location = models.CharField(max_length=255)
    type = models.CharField(max_length=2) # not the top level 
    scope = models.CharField(max_length=63)

    PRECON = "Pre-Construction"
    ENOT_FOUND = "(E) Not Found"
    NOCON = "No Construction"
    POSTCON = "Post-Construction"
    PENDINGD = "Pending Direction"
    ECAPPED = "(E) Capped"
    
    STATUS_CHOICES = (
        (PRECON, "Pre-Construction"),
        (ENOT_FOUND, "(E) Not Found"),
        (NOCON, "No Construction"),
        (POSTCON, "Post-Construction"),
        (PENDINGD, "Pending Direction"),
        (ECAPPED, "(E) Capped"),
    )

    status = models.CharField(max_length = 20,
                        choices = STATUS_CHOICES,
                        default = "(E) Not Found")
    pp_history = models.JSONField(default=dict({}))
    submittals = models.JSONField(default="none")

    # geometry_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default="Point")




