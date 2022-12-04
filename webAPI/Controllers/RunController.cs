using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using runlog2023.models;

namespace runlog2023.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RunController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<RunController> _logger;

        public RunController(ILogger<RunController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "runs")]
        public IEnumerable<Run> Get()
        {
            var runs = new List<Run>();
            //to get the connection string 
            string connectionString = "Data Source=tcp:todos2020.database.windows.net; Authentication=Active Directory Password; Encrypt=True; Initial Catalog=runlog2023; User Id=*******; Password=************";
            //build the sqlconnection and execute the sql command
            
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                string commandtext = "SELECT TOP 10 * FROM [bogoodski].[runlog_data]";

                SqlCommand cmd = new SqlCommand(commandtext, conn);

                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    var run = new Run()
                    {
                        index = reader.GetInt64(0),
                        runId = reader.GetInt64(1),
                        date = reader.GetDateTime(2),
                        duration = reader.GetDateTime(3),
                        length = reader.GetDouble(4),
                        type = reader.GetString(5),
                        surface = reader.GetString(6),
                        pace = reader.GetDateTime(7),
                        sleepHours = reader.GetDouble(8),
                        sleepToBedTime = reader.GetDateTime(9),
                        sleepWakeTime = reader.GetDateTime(10),
                        runListenedTo = reader.GetString(11),
                        temperature = reader.GetDouble(12),
                        shoeAge = reader.GetInt64(13),
                        startTime = reader.GetDateTime(14)
                    };

                    runs.Add(run);

                }   
            }
            return runs;            
        }

        //[HttpGet(Name = "GetWeatherForecast")]
        //public IEnumerable<WeatherForecast> Get()
        //{
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = Random.Shared.Next(-20, 55),
        //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}
    }
}