
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# create views here


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
