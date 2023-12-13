# Generated by Django 4.2.8 on 2023-12-13 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Stock_info',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=200)),
                ('stock_name', models.CharField(max_length=200)),
                ('exchange', models.CharField(choices=[('NSE', 'NSE'), ('BSE', 'BSE')], default=('NSE', 'NSE'), max_length=4)),
            ],
        ),
    ]