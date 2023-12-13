from rest_framework import serializers
from .models import StockInfo
class StockInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfo
        fields = '__all__'

class StockNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfo
        # fields = '__all__'
        fields = ['stock_name']
