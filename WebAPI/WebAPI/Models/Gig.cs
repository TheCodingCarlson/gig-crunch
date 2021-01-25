using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Gig
    {
        [Key]
        public int Id { get; set; }

        public int Day { get; set; }

        public int Month { get; set; }

        public int Year { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Venue { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string City { get; set; }

        [Column(TypeName = "nvarchar(2)")]
        public string State { get; set; }

        public int BandId { get; set; }

        public int Pay { get; set; }

        public GigExpense[] Expenses { get; set; }
    }
}
