using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class GigCrunchDbContext : DbContext
    {
        public GigCrunchDbContext(DbContextOptions<GigCrunchDbContext> options) : base(options)
        {

        }

        public DbSet<Gig> Gigs { get; set; }

        public DbSet<Band> Bands { get; set; }
    }
}
