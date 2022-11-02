from rest_framework import serializers

from mainapp.models import FeatureCollection, Feature

class FeatureSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feature
        fields = [
            'type',
            'scope',
            'status',
            'pp_history',
            'submittals',
            'data',
        ]
class FeatureCollectionSerializer(serializers.ModelSerializer):

    features = FeatureSerializer(many=True)
    # def create(self, data):
    #     # features_data = data.get("features")

    #     # print("Hi ", features_data)

    #     fc = FeatureCollection.objects.create(**data)
    #     # for feature_data in features_data:
    #     #     fd = feature_data.get("properties")
    #     #     print(fd)
    #     #     Feature.objects.create(feature_collection=fc, **fd)
    #     return fc

    class Meta:
        model = FeatureCollection

        fields = [
            'name',
            'data',
            'features',
            ]
