using System.Collections.Generic;
using System.IO;
using System.Linq;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;

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

        [Route("/api/gigs/")]
        public List<Gig> Gigs()
        {
            var jsonFiles = Directory.EnumerateFiles("./Data/gigs/", "*.json");
            var allGigs = new List<Gig>();

            foreach (var jsonFile in jsonFiles)
            {
                string json = System.IO.File.ReadAllText(jsonFile);
                var gigs = JsonConvert.DeserializeObject<List<Gig>>(json);
                allGigs = allGigs.Concat(gigs).ToList();
            }

            return allGigs;
        }

        [Route("/api/gigs/{year}/{bandCode?}/")]
        public List<Gig> GigYear(string year, string bandCode)
        {
            string json = System.IO.File.ReadAllText($"./Data/gigs/{year}.json");
            var gigs = JsonConvert.DeserializeObject<List<Gig>>(json);

            if (!string.IsNullOrEmpty(bandCode))
            {
                gigs = gigs.Where(x => x.BandCode.ToLower() == bandCode).ToList();
            }

            return gigs;
        }
    }
}
