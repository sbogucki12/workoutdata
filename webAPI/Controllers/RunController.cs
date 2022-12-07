using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using runlog2023.models;

namespace runlog2023.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RunController : ControllerBase
    {        

        private readonly ILogger<RunController> _logger;
        private readonly IConfiguration _configuration;

        public RunController(ILogger<RunController> logger, IConfiguration configuration)
        {
            _logger = logger;
            _configuration = configuration; 
        }

        [HttpGet(Name = "runs")]
        public IActionResult Get(int numberOfRuns)
        {
            try
            {
                var user = this._configuration["user"];
                var password = this._configuration["password"];


                List<Run> runs = new List<Run>();
                string connectionString = $"Data Source=tcp:todos2020.database.windows.net; Authentication=Active Directory Password; Encrypt=True; Initial Catalog=runlog2023; User Id={user}; Password={password}";
                //build the sqlconnection and execute the sql command

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    conn.Open();
                    string commandtext = $"SELECT TOP {numberOfRuns} * FROM [bogoodski].[runlog_data]";

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

                if (runs.Count > 0)
                {
                    return Ok(runs);
                }

                return NoContent();
            } catch(Exception ex)
            {
                return Unauthorized(ex);
            }
        }
    }
}