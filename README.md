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

## TODO

[ X ] - Add functionality that calculates pace

[ X ] - Add success/failure handling on form submit 

# Progress...

# December 29, 2022

* Form for adding runs now calculates pace from time and distance: 
![convert-pace-gif.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/convert-pace-gif.gif "convert-pace-gif.gif")

# December 28, 2022: 

* Run form now redirects after successfully submitting a new run. 
* Continuing to add styling. 
![style-and-function-gif.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/style-and-function-gif.gif "style-and-function-gif.gif")


# December 27, 2022: 

* Still toying around with CSS. Need to get back to adding functionality.  (Tommorow) 
![main-style-gif.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/main-style-gif.gif "main-style-gif.gif")


# December 26, 2022: 

* Playing around with style: 
![addrun-style-12262022.jpg](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/addrun-style-12262022.jpg "addrun-style-12262022.jpg")

* Subtle but essential functionality added to run form: 
  * Display current shoe age
  * Auto increment index of new run
  * Calculate total hours of sleep 
![runform_functionality-gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/runform_functionality-gif.gif "runform_functionality-gif.gif")

# December 23, 2022: 

* Data from UI posts to cloud database via .NET webAPI
![post-run-from-ui-gif.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/post-run-from-ui-gif.gif "post-run-from-ui-gif.gif")

# December 22, 2022: 

* Data from UI (hardcoded for now) posts to cloud database via .NET webAPI
![log-add-run-to-database-gif.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/log-add-run-to-database-gif.gif "log-add-run-to-database-gif.gif")


## December 21, 2022: 

* Adding functionality to the UI.  (Slowly...)
![log-addrun-to-console.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/log-addrun-to-console.gif "log-addrun-to-console.gif")

## December 20, 2022: 

* Set up some basic HTML pages for the UI

## December 19, 2022: 

* The UI now fetches data from the cloud database via (development) Web API 
![ui-fetch-gif.gif](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/ui-fetch-gif.gif "ui-fetch-gif.gif")

## December 16, 2022: 

* Formatted run data for display.  

## December 15, 2022: 

* Added some environment checks in the run controller. 

## December 12, 2022: 

* Sidetracked. 
  * Which day of the week do I typically run the farthest? 
  * How have my distances changed over time?  
![runDistances](https://raw.githubusercontent.com/sbogucki12/workoutdata/main/images/runDistances.jpg "runDistances.jpg")

## December 11, 2022: 

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
