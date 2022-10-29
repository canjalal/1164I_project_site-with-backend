from django.shortcuts import render

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
        form_data = request.POST['formdata']
        return render(request, 'new_collection.html', {
            'form_data': form_data,
        })