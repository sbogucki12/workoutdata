using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace runlog2023.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration)
        {         
            _configuration = configuration;
        }

        // POST api/<AuthController>
        [HttpPost]
        public IActionResult Post(string pw)
        {
            if (pw == this._configuration["password"])
            {
                return Ok();
            }

            return BadRequest("Wrong Password");
        }       


        // GET: api/<AuthController>
        /*        [HttpGet]
                public IEnumerable<string> Get()
                {
                    return new string[] { "value1", "value2" };
                }

                // GET api/<AuthController>/5
                [HttpGet("{id}")]
                public string Get(int id)
                {
                    return "value";
                }*/



        /*// PUT api/<AuthController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AuthController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }*/
    }
}
