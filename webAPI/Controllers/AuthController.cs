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

            return Forbid();
        }       
    }
}
