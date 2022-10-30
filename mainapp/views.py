import json
from django.shortcuts import render
from .json_data_functions import clean_json

# Create your views here.

def index(request):
    if(request.method == 'GET'):
        pass
    elif(request.method == 'POST'):
        pass

def collection(request):
    if(request.method == 'GET'):
        return render(request, 'new_collection.html')
    elif(request.method == 'POST'):
        form_data = clean_json(request.POST['formdata'])
        form_data_json = json.loads(form_data)
        print(type(form_data_json.get("crs")))
        return render(request, 'new_collection.html', {
            'form_data': form_data,
        })