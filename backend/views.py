# from django.shortcuts import render
from inertia import render

# Create your views here.

def home(request):
    return render(request, 'Home/Index', props={
    'events': ['test', 'sample']
  })


def events(request):
    return render(request, 'Event/Index', props={

    })
