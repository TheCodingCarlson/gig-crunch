using System.Collections.Generic;
using System.IO;
using System.Linq;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class APIController : ControllerBase
    {
        [Route("/api/bands/")]
        public List<Band> Bands()
        {
            string json = System.IO.File.ReadAllText("./Data/bands.json");
            var bands = JsonConvert.DeserializeObject<List<Band>>(json);

            return bands;
        }

        [Route("/api/bands/{code}")]
        public Band Band(string code)
        {
            string json = System.IO.File.ReadAllText("./Data/bands.json");
            var bands = JsonConvert.DeserializeObject<List<Band>>(json);

            return bands.Where(b => b.Code.ToLower() == code).FirstOrDefault();
        }

        [Route("/api/gigs/{year}")]
        public List<Gig> Gigs(string year)
        {
            string json = System.IO.File.ReadAllText($"./Data/gigs/{year}.json");
            var gigs = JsonConvert.DeserializeObject<List<Gig>>(json);

            return gigs;
        }
    }
}
