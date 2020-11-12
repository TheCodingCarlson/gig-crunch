using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Gig
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Date { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Venue { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string City { get; set; }

        [Column(TypeName = "nvarchar(2)")]
        public string State { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string BandCode { get; set; }

        public int Pay { get; set; }
    }
}
