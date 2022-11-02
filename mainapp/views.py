import json
from django.shortcuts import render
from mainapp.models import Feature, FeatureCollection

from mainapp.serializers import FeatureCollectionSerializer, FeatureSerializer
from .json_data_functions import clean_json
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

def index(request):
    if(request.method == 'GET'):
        pass
    elif(request.method == 'POST'):
        pass

@api_view(["GET", "POST"])
def collection(request):
    if(request.method == 'GET'):
        return render(request, 'new_collection.html')
    elif(request.method == 'POST'):
        form_data = clean_json(request.POST['formdata'])
        form_data_json = json.loads(form_data)
        # print(type(form_data_json.get("crs")))

        # del form_data_json["features"]

        real_data = {}
        real_data["name"] = form_data_json.get("name")
        real_data["data"] = form_data_json
        # real_data["features"] = form_data_json.get("features")

        # fcserializer = FeatureCollectionSerializer(data=form_data_json)

        fc = FeatureCollection.objects.create(**real_data)

        f_data = form_data_json.get("features")

        for feature_data in f_data:
            properties = feature_data.get("properties")
            actual_data = {}
            actual_data["type"] = properties["type"]
            actual_data["scope"] = properties["scope"]
            actual_data["status"] = properties["status"]
            actual_data["pp_history"] = properties["pp_history"]
            actual_data["submittals"] = properties.get("submittals") or dict()
            actual_data["data"] = feature_data
            Feature.objects.create(feature_collection=fc, **actual_data)

        # fcserializer = FeatureCollectionSerializer(instance=fc)

        # instance = fcserializer.save()
        # data = fcserializer.data # saving this will allow model to populate calculated fields not present in JSON data presented to POST request
        # return Response({**data, })

        # if fcserializer.is_valid(raise_exception=True):
        #     instance = fcserializer.save() # saves into database!!!
        #     print(instance.pk)
        #     data = fcserializer.data # saving this will allow model to populate calculated fields not present in JSON data presented to POST request
        #     return Response({**data, })



        return render(request, 'new_collection.html', {
            # 'form_data': form_data,
            'form_data': form_data_json.get("features")
        })