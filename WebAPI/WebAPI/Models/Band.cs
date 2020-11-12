using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Band
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Code { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
    }
}
