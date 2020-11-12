using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Gig
    {
        public string Date { get; set; }
        public string Venue { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string BandCode { get; set; }
        public int Pay { get; set; }
    }
}
