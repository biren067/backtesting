from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .serializers import StockInfoSerializer,StockNameSerializer
from .models import StockInfo
def home(request):
    return HttpResponse("Hi, how are you")
# Create your views here.

@api_view(['GET'])
def get_nse_stock(request):
    query_set = StockInfo.objects.values('stock_name')
    serializer = StockNameSerializer(query_set, many=True)
    return JsonResponse(serializer.data,safe=False)
