from django.db import models

# Create your models here.
EXCHANGE_CHOICES = (
    ("NSE", "NSE"),
    ("BSE", "BSE"))
class StockInfo(models.Model):
    
    company_name=models.CharField(max_length=200)
    stock_name=models.CharField(max_length=200)
    exchange=models.CharField(max_length=4,choices=EXCHANGE_CHOICES,default=EXCHANGE_CHOICES[0])
    
    def __str__(self):
        return self.company_name
