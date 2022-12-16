using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using runlog2023.models;
using System;
using System.Data;
using System.Reflection;

namespace runlog2023.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RunController : ControllerBase
    {
        private readonly ILogger<RunController> _logger;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _currentEnvironment;

        public RunController(ILogger<RunController> logger, IConfiguration configuration, IWebHostEnvironment env)
        {
            _logger = logger;
            _configuration = configuration;
            _currentEnvironment = env;
        }

        [HttpPost]
        [Route("GetRuns")]
        public IActionResult GetRuns([FromBody]string pw, int numberOfRuns)
        {
            bool auth = false; 
            if(_currentEnvironment.EnvironmentName == "Development")
            {
                auth = new Auth(_configuration).CheckAuth(pw);
            }

            if(_currentEnvironment.EnvironmentName == "Production")
            {
                auth = new Auth(_configuration).CheckAuth(pw);
            }
            
            
            if (auth)
            {
                try
                {
                    string user = "";
                    string password = "";
                    if (_currentEnvironment.EnvironmentName == "Development")
                    {
                        user = this._configuration["user"];
                        password = this._configuration["password"];
                    }

                    if (_currentEnvironment.EnvironmentName == "Production")
                    {
                        user = "";
                        password = "";
                    }
                                   
                    string connectionString = $"Data Source=tcp:todos2020.database.windows.net; Authentication=Active Directory Password; Encrypt=True; Initial Catalog=runlog2023; User Id={user}; Password={password}";
                    
                    List<Run> runs = new List<Run>();
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
                }
                catch (Exception ex)
                {
                    return Unauthorized(ex);
                }
            }
            else
            {
                return Forbid();
            }
        }

        [HttpPost]
        [Route("PostRun")]
        public IActionResult PostRun(string pw, Run data)
        {
            
            try
            {                
                var auth = new Auth(_configuration).CheckAuth(pw);
                string user = "";
                string password = "";
                if (_currentEnvironment.EnvironmentName == "Development")
                {
                    user = this._configuration["user"];
                    password = this._configuration["password"];
                }

                if (_currentEnvironment.EnvironmentName == "Production")
                {
                    user = "";
                    password = "";
                }
                string connectionString = $"Data Source=tcp:todos2020.database.windows.net; Authentication=Active Directory Password; Encrypt=True; Initial Catalog=runlog2023; User Id={user}; Password={password}";
                string commandtext = "INSERT INTO [bogoodski].[runlog_data]([index], runId, date, duration, length, type, surface, pace, sleepHours, sleepToBedTime, sleepWakeTime, runListenedTo, temperature, shoeAge, startTime) VALUES (@index, @runId, @date, @duration, @length, @type, @surface, @pace, @sleepHours, @sleepToBedTime, @sleepWakeTime, @runListenedTo, @temperature, @shoeAge, @startTime)";


                using (SqlConnection conn = new SqlConnection(connectionString))
                using (SqlCommand cmd = new SqlCommand(commandtext, conn))
                {
                    if (auth)
                    {
                        //TODO: THIS COMMAND IS THROWING AN EXCEPTION
                        //string commandtext = $"INSERT INTO [bogoodski].[runlog_data] ([index], runId, date, duration, length, type, surface, pace, sleepHours, sleepToBedTime, sleepWakeTime, runListenedTo, temperature, shoeAge, startTime) VALUES ({data.index}, {data.runId}, {data.date.ToString()}, {data.duration.ToString()}, {data.length}, {data.type}, {data.surface}, {data.pace.ToString()}, {data.sleepHours.ToString()}, {data.sleepToBedTime.ToString()}, {data.sleepWakeTime.ToString()}, {data.runListenedTo}, {data.temperature}, {data.shoeAge}, {data.startTime.ToString()});";
                        cmd.Parameters.Add("@index", SqlDbType.BigInt).Value = data.index;
                        cmd.Parameters.Add("@runId", SqlDbType.BigInt).Value = data.runId;
                        cmd.Parameters.Add("@date", SqlDbType.DateTime).Value = data.date.ToString();
                        cmd.Parameters.Add("@duration", SqlDbType.DateTime).Value = data.duration.ToString();
                        cmd.Parameters.Add("@length", SqlDbType.Float).Value = data.length;
                        cmd.Parameters.Add("@type", SqlDbType.VarChar).Value = data.type;
                        cmd.Parameters.Add("@surface", SqlDbType.VarChar).Value = data.surface;
                        cmd.Parameters.Add("@pace", SqlDbType.DateTime).Value = data.pace.ToString();
                        cmd.Parameters.Add("@sleepHours", SqlDbType.Float).Value = data.sleepHours;
                        cmd.Parameters.Add("sleepToBedTime", SqlDbType.DateTime).Value = data.sleepToBedTime.ToString();
                        cmd.Parameters.Add("sleepWakeTime", SqlDbType.DateTime).Value = data.sleepWakeTime.ToString();
                        cmd.Parameters.Add("@runListenedTo", SqlDbType.VarChar).Value = data.runListenedTo;
                        cmd.Parameters.Add("@temperature", SqlDbType.Float).Value = data.temperature;
                        cmd.Parameters.Add("@shoeAge", SqlDbType.BigInt).Value = data.shoeAge;
                        cmd.Parameters.Add("@startTime", SqlDbType.DateTime).Value = data.startTime.ToString();



                        conn.Open();
                        cmd.ExecuteNonQuery();
                        conn.Close();

                        return Ok(data); 
                    }
                    else
                    {
                        return Forbid();
                    }
                };
            }
            catch (Exception ex) 
            {
                return NotFound(ex);
            }
        }
    }
}