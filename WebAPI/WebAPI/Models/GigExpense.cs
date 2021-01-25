using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class GigExpense
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Description { get; set; }

        public int Cost { get; set; }

        public GigExpenseCategory Category { get; set; }

        public int Mileage { get; set; }
    }

    public enum GigExpenseCategory
    {
        Food,
        Trasportation,
    }
}
