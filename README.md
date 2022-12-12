# workoutdata

## Objective

I want to rebuild [www.dailyrun.net](https://www.dailyrun.net/). 

### Problem

The data in my runlog, as seen via the UI, isn't what it appears to be...

![runlogUI-original.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/runlogUI-original.jpg "runlogUI-original.jpg")
![runlogUI-original-detail.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/runlogUI-original-detail.jpg "runlogUI-original-detail.jpg")

In laziness, when initially developing my runlog two years ago, I wasn't precise with my data types.  For example, to avoid unnecessary mental exercise at the time, I occasionally used strings instead of numerical or date time data.  

![data-problem-pace.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/data-problem-pace.jpg "data-problem-pace.jpg")

1. First things first, I want to convert those data into their appropriate types to allow me to perform some data analysis. (DONE)

2. Later, I'll build a new database aligned with those data types and use the transformed data to seed the database. (DONE) 

3. Next, I'll migrate the local database to Azure. (DONE) 

4. After that, I'll build out a backend - just some controllers, basically, via .NET probably. (DONE)

5. Finally, I'll build a UI. 

## Background

When I originally developed my runlog, in my daily professional life, I was working more directly in the webdev space.  Since then, I have moved more into enterprise data management, and acquired an interest in data science, especially data engineering.  Through work, I'm enrolled and working through eCornell's 35 week Python and Machine Learning course.  

My runlog is dated, so it needs to be revised.  I want to take the opportunity in rebuilding it in a way that's educational for me, especially in support of my data science learning, and job responsibilities around enterprise data management at work.  

## Directions

* To see code and visualizations, explore the notebooks in the .ipynb_checkpoints folder
  * [folder](https://github.com/sbogucki12/workoutdata/tree/main/.ipynb_checkpoints)

# Progress...

## December 11, 2002: 

* Sidetracked. What day of the week did I run the most often? 
![daily-frequency](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/daily-frequency.jpg "daily-frequency.jpg")

## December 9, 2022

* I'm way too excited about this, but I wired this up the UI intending not to use any frameworks. #vanilla. 
![vanilla.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/vanilla.jpg "vanilla.jpg")

### Decenber 8, 2022

* Data passing from browser (Swagger) via API POST to database on Azure (via ADO.NET)
  
![dbBeforePost.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/dbBeforePost.jpg "dbBeforePost.jpg")
![postRequestRunBody.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/postRequestRunBody.jpg "postRequestRunBody.jpg")
![postIntoDB.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/postIntoDB.jpg "postIntoDB.jpg")


### December 4, 2022

* Wired Azure db to .NET Web API

![api_get_runs](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/api_get_runs.jpg "api_get_runs.jpg")


### November 29, 2022

* Migrated to Azure SQL. 

![azure_sql_deploy](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/azure_sql_deploy.jpg "Migrated to Azure SQL")

* Working on migrating local SQL Server database to Azure

  * Downloaded Azure Data Migration Assistant to assess the local database
  * Spun up a database on Azure
  * Experiencing a ton of difficulty with my Azure profile, making connecting to resources truly frustrating. Toubleshooting...

* Successfully migrated to Azure SQL. 

### November 27, 2022

* Local database created and seeded with transformed data.   

![seeded_database](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/seeded_database.jpg "seeded_database")


* Transformed data into usable data types

![datatypes_transformed](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/datatypes_transformed.jpg "datatypes_transformed.jpg")

* Created a local database and table via SQL Server Management Studio 

![sql_table](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/sql_table.jpg "sql_table.jpg")

* Created and seeded a local database. 

### November 26, 2022

Exploring the difference in pandas datetime and timedelta data types.  

When I plot a series of timedeltas, I don't get the desired Y-axis label. 

When I plot a series of datetimes, the appropriate Y-axis label is auto-generated: 

![datetime_vs_timedelta](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/datetime_vs_timedelta.jpg "datetime_vs_timedelta.jpg")

The pace for my most recent 30 runs.  I'm currently not running due to injury.  

![paces_last_30_days.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/paces_last_30_days.jpg "paces_last_30_days.jpg")


[Cont...](https://github.com/sbogucki12/workoutdata/blob/main/.ipynb_checkpoints/runlog-etl-checkpoint.ipynb)
