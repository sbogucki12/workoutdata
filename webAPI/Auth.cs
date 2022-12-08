using Microsoft.AspNetCore.Mvc;

namespace runlog2023
{
    public class Auth
    {
        private readonly IConfiguration _configuration;
        public Auth(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Boolean CheckAuth(string pw)
        {
            if (pw == this._configuration["password"])
            {
                return true;
            }

            return false;

        }
    }
}
